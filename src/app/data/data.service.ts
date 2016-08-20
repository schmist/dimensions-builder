import { Injectable } from '@angular/core';
import { Pack, Minifig, Vehicle, Skill } from './data';
import { Abilities } from './ability';
import { minifigs, vehicles, skills, packs } from './static-data';

@Injectable()
export class DataService {
    packMap: { [id: number] : Pack; } = null;
    minifigMap: { [id: number] : Minifig; } = null;
    minifigs: Minifig[];
    skillMap: { [id: number] : Skill; } = null;
    skills: Skill[];


    constructor() {
        this.ensureLoaded();
    }

    ensureLoaded() {
        if (this.packMap === null) {
            this.packMap = {};
            for (let pack of packs) {
                let p = Object.assign({}, pack);
                p.minifigs = [];
                if (pack.id in this.packMap) {
                    console.log('pack ' + pack.id + ' is already in packMap');
                }
                this.packMap[pack.id] = p;
            }

            this.skillMap = {};
            this.skills = [];
            for (let data of skills) {
                let skill = Object.assign({}, data);
                skill.providers = [];
                this.skillMap[skill.id] = skill;
                this.skills.push(skill);
            }

            this.minifigMap = {};
            this.minifigs = [];
            for (let data of minifigs) {
                let minifig: Minifig = Object.assign({}, data);
                minifig.skills = this.getSkills(data.skillIds);
                for (let skill of minifig.skills) {
                    skill.providers.push(minifig);
                }

                let pack = this.packMap[minifig.packId];
                if (pack !== undefined) {
                    pack.minifigs.push(minifig.id);
                } else {
                    console.log('cannot find pack ' + minifig.packId);
                }

                this.minifigMap[minifig.id] = minifig;
                this.minifigs.push(minifig);
            }

            for (let data of vehicles) {
                let vehicle: Vehicle = Object.assign({}, data);
                vehicle.skills = this.getSkills(data.skillIds);
                for (let skill of vehicle.skills) {
                    skill.providers.push(vehicle);
                }
            }
        }
    }

    getPack(id: number) {
        return this.packMap[id];
    }

    getAllPacks() {
        return packs;
    }

    getMinifig(id: number) {
        return this.minifigMap[id];
    }

    getMinifigs(ids: number[]) {
        let a: Minifig[] = [];
        for (let id of ids) {
            if (id in this.minifigMap) {
                a.push(this.minifigMap[id]);
            }
        }
        return a;
    }

    getAllMinifigs() {
        return this.minifigs;
    }

    getSkills(ids: number[]) {
        let a: Skill[] = [];
        for (let id of ids) {
            if (id in this.skillMap) {
                a.push(this.skillMap[id]);
            }
        }
        return a;
    }

    getAllSkills() {
        return this.skills;
    }

    getMainAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([25, 46, 32, 36, 35, 31, 37, 38, 42, 50]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getImportantAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 33, 39, 40, 41, 43, 44, 45, 51, 52, 53, 54]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getUniqueAbilities(except: Abilities) {
        let result = new Abilities([]);
        for (let skill of this.skills) {
            if (skill.providers.length == 1 && except !== null && !except.contains(skill)) {
                result.add(skill);
            }
        }
        return result;
    }

    getAbilities(except: Abilities) {
        let result = new Abilities(this.getAllSkills());
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }
}
