import { Component, Input } from '@angular/core';
import {Minifig} from "../data/data";

@Component({
	selector: 'minifig-textlink',
	template: `<a [routerLink]="[\'/character/\' + minifig.id]">{{minifig.name}}</a>`
})

export class MinifigTextlinkComponent {
    @Input() minifig: Minifig;
}
