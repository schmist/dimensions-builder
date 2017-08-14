import {Component, Input} from '@angular/core';
import {Pack} from "../data/data";

@Component({
	selector: 'lego-pack',
	templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})

export class PackComponent {
    @Input() pack: Pack;
}
