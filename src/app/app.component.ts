import { Component } from '@angular/core';
import {NavigationEnd, Router, Event} from "@angular/router";

declare let ga:Function;
declare let window: Window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private sub: any;

  constructor(public router: Router) {
  }

  public ngOnInit() {
    this.sub = this.router.events.subscribe(
      (event:Event) => {
        if (event instanceof NavigationEnd) {
          if (typeof ga === "function") {
            ga('send', 'pageview', event.urlAfterRedirects);
          }
          if (typeof window != 'undefined') {
            window.scroll(0, 0);
          }
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
