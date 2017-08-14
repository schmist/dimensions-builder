import { Component, Input } from '@angular/core';
import {Pack, packTypeStrings} from "../../data/data";

@Component({
	moduleId: module.id,
	selector: 'cmp-pack-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'pack-table.component.html'
})
export class PackTableComponent {
    @Input() packs: Pack[];
	@Input() comments: string[];
	@Input() amazon: boolean;
	@Input() labels: boolean = true;

  @Input() typeStrings = packTypeStrings;
}
