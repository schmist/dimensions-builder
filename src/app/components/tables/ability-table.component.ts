import { Component, Input } from '@angular/core';
import {Skill} from "../../data/data";

@Component({
	moduleId: module.id,
	selector: 'cmp-ability-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'ability-table.component.html'
})
export class AbilityTableComponent {
    @Input() abilities: Skill[];
}
