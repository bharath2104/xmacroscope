import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DvlFwModule } from '@dvl-fw/core';

import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
    NoopAnimationsModule,
    DvlFwModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class VisualizationViewModule { }
