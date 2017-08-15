import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MinifigHeadComponent} from "./minifig-head.component";
import {MinifigPanelComponent} from "./minifig-panel.component";
import {MinifigTextlinkComponent} from "./minifig-textlink.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ROUTES} from "../app.routes";
import {AbilitySelectComponent} from "./ability-select.component";
import {NavSectionComponent} from "./nav-section.component";
import {PackComponent} from "./pack.component";
import {PanelButtonComponent} from "./panel-button.component";
import {ShareButtonComponent} from "./share-button.component";
import {ShareSectionComponent} from "./share-section.component";
import {YoutubeComponent} from "./youtube.component";
import {FormsModule} from "@angular/forms";
import {MetaService} from "../meta/meta.service";

@NgModule({
  declarations: [
    MinifigHeadComponent,
    MinifigPanelComponent,
    MinifigTextlinkComponent,
    AbilitySelectComponent,
    NavSectionComponent,
    PackComponent,
    PanelButtonComponent,
    ShareButtonComponent,
    ShareSectionComponent,
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    MinifigHeadComponent,
    MinifigPanelComponent,
    MinifigTextlinkComponent,
    AbilitySelectComponent,
    NavSectionComponent,
    PackComponent,
    PanelButtonComponent,
    ShareButtonComponent,
    ShareSectionComponent,
    YoutubeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule {
}
