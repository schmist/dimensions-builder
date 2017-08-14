import { NgModule } from '@angular/core';

import { BuyersGuideComponent } from './buyers-guide.component';
import {ComponentsModule} from "../components/components.module";
import {TablesModule} from "../components/tables/tables.module";

@NgModule({
  declarations: [
    BuyersGuideComponent
  ],
  imports: [
    ComponentsModule,
    TablesModule
  ],
  exports: [
    BuyersGuideComponent
  ]
})
export class BuyersGuideModule {
}
