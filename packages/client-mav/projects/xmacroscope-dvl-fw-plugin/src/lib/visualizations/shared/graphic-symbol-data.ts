import { GraphicSymbol, Visualization } from '@dvl-fw/core';
import { DataProcessorService, RawChangeSet, ChangeSet, Datum, idSymbol, DataProcessor, simpleField, constant, BoundField } from '@ngx-dino/core';
import { differenceBy, transform } from 'lodash';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

export type TDatum<T> = Datum<T> & T;

export class GraphicSymbolData<T = any> {
  public readonly requiredFields: string[] = ['identifier'];
  public readonly graphicSymbol: GraphicSymbol;

  constructor(private dataProcessorCreator: DataProcessorService,
    public readonly visualization: Visualization,
    graphicSymbolId: string,
    public readonly defaultValues: { [gvName: string]: any } = {},
    private readonly postprocessingFields: { [gvName: string]: BoundField<any> } = {}) {

    this.graphicSymbol = visualization.graphicSymbols[graphicSymbolId];
    if (!this.graphicSymbol) {
      throw new Error(`'Graphic Symbol ${graphicSymbolId} not found in Visualization ${visualization.id}`);
    }
    const options = visualization.graphicSymbolOptions.filter(gso => gso.id === graphicSymbolId);
    if (options.length) {
      this.requiredFields = options[0].graphicVariableOptions.filter(gvo => gvo['required'] === true).map(gvo => gvo.id || gvo.type);
    }
    if (this.requiredFields.indexOf('identifier') === -1) {
      this.requiredFields.push('identifier');
    }
  }

  asRawChangeSet(): Observable<RawChangeSet<T>> {
    const gvNames = Object.keys(this.graphicSymbol.graphicVariables);
    const inValid = this.requiredFields.some((f) => gvNames.indexOf(f) === -1);
    if (inValid) {
      return of(RawChangeSet.fromArray([]));
    } else {
      return this.graphicSymbol.recordStream.asObservable();
    }
  }
  asChangeSet(): Observable<ChangeSet<T>> {
    return this.createProcessor().asObservable();
  }
  asDataArray(): Observable<TDatum<T>[]> {
    let data: Datum<T>[] = [];
    return this.asChangeSet().pipe(
      map((set) => {
        data = this.applyChangeSet(set, data);
        return data;
      })
    ) as Observable<TDatum<T>[]>;
  }

  private createProcessor(): DataProcessor<T, Datum<T>> {
    const { graphicSymbol, defaultValues } = this;
    return this.dataProcessorCreator.createProcessor(
      this.asRawChangeSet(),
      graphicSymbol.graphicVariables['identifier'].asBoundField(),
      this.graphicSymbolBoundFields(graphicSymbol, defaultValues),
      this.postprocessingFields,
      { strictMode: true, keepAlive: true }
    );
  }

  applyChangeSet(set: ChangeSet<any>, data: Datum<T>[]): TDatum<T>[] {
    const result = differenceBy(data, set.remove.toArray(), set.replace.toArray(), idSymbol);
    set.insert.forEach(item => result.push(item as Datum<T>));
    set.replace.forEach(item => result.push(item as Datum<T>));

    return result as TDatum<T>[];
  }

  private graphicSymbolBoundFields(graphicSymbol: GraphicSymbol,
    defaults: { [gvName: string]: any } = {}): { [gvName: string]: BoundField<any> } {
    return transform(graphicSymbol.graphicVariables, (result, gv, k) => {
      result[k] = gv.asBoundField();
    }, transform(defaults, (results, v, k) => {
      results[k] = simpleField({
        label: k,
        bfieldId: k,
        operator: constant(v)
      }).getBoundField();
    }));
  }
}
