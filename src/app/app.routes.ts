import { Routes } from '@angular/router';
import {
	BuyersGuideComponent
} from './blog';
import {TeamBuilderComponent} from "./team-builder/team-builder.component";
import {HomeComponent} from "./pages/home.component";
import {WaveListComponent} from "./pages/wave-list.component";
import {WaveDetailsComponent} from "./pages/wave-details.component";
import {PackDetailsComponent} from "./pages/pack-details.component";
import {CharacterListComponent} from "./pages/character-list.component";
import {CharacterDetailsComponent} from "./pages/character-details.component";
import {AbilityListComponent, AbilityListType} from "./pages/ability-list.component";
import {AbilityDetailsComponent} from "./pages/ability-details.component";
import {LevelListComponent} from "./pages/level-list.component";
import {LevelDetailsComponent} from "./pages/level-details.component";

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'all-waves-and-packs', component: WaveListComponent },
	{ path: 'wave/:id', component: WaveDetailsComponent },
	{ path: 'pack/:id', component: PackDetailsComponent },
	{ path: 'characters', component: CharacterListComponent },
	{ path: 'character/:id', component: CharacterDetailsComponent },
	{ path: 'abilities', component: AbilityListComponent, data: { type: AbilityListType.All } },
	{ path: 'rare-abilities', component: AbilityListComponent, data: { type: AbilityListType.Rare } },
	{ path: 'combo-abilities', component: AbilityListComponent, data: { type: AbilityListType.Combos } },
	{ path: 'year2-abilities', component: AbilityListComponent, data: { type: AbilityListType.Year2 } },
	{ path: 'ability/:id', component: AbilityDetailsComponent },
	{ path: 'team-builder', component: TeamBuilderComponent },
	{ path: 'team-builder/level/:level' , component: TeamBuilderComponent },
	{ path: 'team-builder/level/:level/:team' , component: TeamBuilderComponent },
	{ path: 'team-builder/:abilities', component: TeamBuilderComponent },
	{ path: 'team-builder/:abilities/:team', component: TeamBuilderComponent },
	{ path: 'levels', component: LevelListComponent },
	{ path: 'level/:id', component: LevelDetailsComponent },
	{ path: 'buyers-guide-year-2', component: BuyersGuideComponent },
	{ path: '**', redirectTo: '/' }
];
