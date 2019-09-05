import { Component, Input, ViewChild } from '@angular/core';
import { DvlFwVisualizationComponent, GraphicVariable, GraphicVariableType, Visualization } from '@dvl-fw/core';
import { XMacroscopeDataService } from 'xmacroscope-dvl-fw-plugin';

export interface ButtonItems {
  label: string;
  icon: string;
  id: string;
}
@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.scss']
})

export class GeomapComponent {
  @Input() data: Visualization;

  @ViewChild('visualization', { static: true }) visualization: DvlFwVisualizationComponent;

  readonly colorType = GraphicVariableType.COLOR;
  readonly shapeType = GraphicVariableType.SHAPE;
  readonly sizeType = GraphicVariableType.AREA_SIZE;

  readonly variables: GraphicVariable[];

  buttonItems: ButtonItems[] = [
    {
      label: 'United States',
      icon: 'map:us',
      id: 'USA'
    },
    {
      label: 'Indiana',
      icon: 'map:indiana',
      id: 'Indiana'
    }
  ];

  constructor(dataService: XMacroscopeDataService) {
    this.variables = dataService.project.graphicVariables;
  }

  geoMapChanged(selectedMap: ButtonItems): void {
    if (this.data) {
      this.data.properties.featureSelection = selectedMap.id;
      this.visualization.runDataChangeDetection();
    }
  }
}
