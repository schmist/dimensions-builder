import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, NgModule, Renderer} from '@angular/core';

import { AppComponent } from './app.component';
import {TopNavComponent} from "./shared/topnav/topnav";
import {PreloadAllModules, Router, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {TeamBuilderModule} from "./team-builder/team-builder.module";
import {BuyersGuideModule} from "./blog/buyers-guide.module";
import {HeadComponent} from "./shared/head.component";
import {PagesModule} from "./pages/pages.module";
import {ComponentsModule} from "./components/components.module";
import {DataService} from "./data/data.service";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    PagesModule,
    ComponentsModule,
    TeamBuilderModule,
    BuyersGuideModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
