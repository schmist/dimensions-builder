import { NgModule } from '@angular/core';

import { TeamBuilderComponent } from './team-builder.component';
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../components/components.module";
import {RouterModule} from "@angular/router";
import {ROUTES} from "../app.routes";

@NgModule({
  declarations: [
    TeamBuilderComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    TeamBuilderComponent
  ]
})
export class TeamBuilderModule {
}
