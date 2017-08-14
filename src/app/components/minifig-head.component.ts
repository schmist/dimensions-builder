import { Component, Input } from '@angular/core';
import {Minifig} from "../data/data";

@Component({
	selector: 'minifig-head',
	template: '<img src="/assets/images/21/{{minifig.image}}.png">',
  styles: ['img { width: 16px; height: 21px; }']
})

export class MinifigHeadComponent {
    @Input() minifig: Minifig;
}
