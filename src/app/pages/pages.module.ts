import { NgModule } from '@angular/core';
import {AbilityDetailsComponent} from "./ability-details.component";
import {AbilityListComponent} from "./ability-list.component";
import {CharacterDetailsComponent} from "./character-details.component";
import {CharacterListComponent} from "./character-list.component";
import {HomeComponent} from "./home.component";
import {LevelDetailsComponent} from "./level-details.component";
import {LevelListComponent} from "./level-list.component";
import {PackDetailsComponent} from "./pack-details.component";
import {WaveDetailsComponent} from "./wave-details.component";
import {WaveListComponent} from "./wave-list.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ROUTES} from "../app.routes";
import {ComponentsModule} from "../components/components.module";
import {TablesModule} from "../components/tables/tables.module";

@NgModule({
  declarations: [
    AbilityDetailsComponent,
    AbilityListComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    HomeComponent,
    LevelDetailsComponent,
    LevelListComponent,
    PackDetailsComponent,
    WaveDetailsComponent,
    WaveListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ComponentsModule,
    TablesModule
  ],
  exports: [
    AbilityDetailsComponent,
    AbilityListComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    HomeComponent,
    LevelDetailsComponent,
    LevelListComponent,
    PackDetailsComponent,
    WaveDetailsComponent,
    WaveListComponent
  ]
})
export class PagesModule {
}
