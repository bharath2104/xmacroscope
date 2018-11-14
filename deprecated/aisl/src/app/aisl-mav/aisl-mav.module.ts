import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoGeomapModule } from '@ngx-dino/geomap';
import { DinoLegendModule } from '@ngx-dino/legend';
import { DinoScatterplotModule } from '@ngx-dino/scatterplot';

import { SharedModule } from '../shared';

import { SizeLegendComponent } from './size-legend/size-legend.component';
import { ColorLegendComponent } from './color-legend/color-legend.component';
import { GeomapComponent } from './geomap/geomap.component';
import { HomeComponent } from './home/home.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AislPersonaComponent } from './aisl-persona/aisl-persona.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { FieldDropzoneComponent } from './field-dropzone/field-dropzone.component';

import { SharedDataService } from './shared/shared-data.service';
import { DragDropService, DraggableDirective, DroppableDirective } from './drag-drop';
import { FieldHoverService } from './shared/field-hover.service';

const components: any[] = [
  HomeComponent,
  ScatterplotComponent,
  DatatableComponent,
  AislPersonaComponent,
  GeomapComponent,
  ScatterplotComponent,
  AttributeSelectorComponent,
  FieldDropzoneComponent,
  SizeLegendComponent,
  ColorLegendComponent,
  DraggableDirective,
  DroppableDirective
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DinoGeomapModule,
    DinoLegendModule,
    DinoScatterplotModule
  ],
  exports: components,
  declarations: components,
  providers: [SharedDataService, DragDropService, FieldHoverService]
})
export class AislMavModule { }