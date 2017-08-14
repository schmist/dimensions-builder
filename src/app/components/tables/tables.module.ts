import { NgModule } from '@angular/core';

import { LevelTableComponent } from './level-table.component';
import { LimitFilter } from './common';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ROUTES} from "../../app.routes";
import {AbilityTableComponent} from "./ability-table.component";
import {PieceTableComponent} from "./piece-table.component";
import {PackTableComponent} from "./pack-table.component";

@NgModule({
  declarations: [
    LimitFilter,
    LevelTableComponent,
    AbilityTableComponent,
    PieceTableComponent,
    PackTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    LevelTableComponent,
    AbilityTableComponent,
    PieceTableComponent,
    PackTableComponent
  ]
})
export class TablesModule {
}
