import { AbilityData, AbilityType, BuilderTag } from './data-types';

export enum Ability {
    Atlantis = 0,
    Chi,
    SuperStrength,
    Digging,
    Dive,
    Drilling,
    Electricity,
    FixIt,
    FlightDock,
    Gyrosphere,
    Hacking,
    HazardCleaner,
    Laser,
    MiniAccess,
    PoleVault,
    PortalGun,
    RainbowLego,
    SilverDestroy,
    SonarSmash,
    TrapGhosts,
    Spinjitzu,
    Target = 22,
    Technology,
    TowBar = 25,
    Tracking,
    VineCutting,
    WaterSpray,
    WeightSwitch,
    XRay,
    Illumination,
    RelicDetector,
    BigTransformation,
    HazardProtection,
    Boomerang,
    Grapple,
    Stealth,
    Acrobat,
    LaserDeflector,
    Drone,
    MindControl,
    MasterBuild,
    Flying,
    Invulnerability,
    Speed,
    Magic,
    MagicShield,
    Ice,
    Gliding,
    Accelerator,
    CargoHook,
    Growth,
    TimeTravel,
    Tardis,
    Arcade,
    SuspendGhost,

    DivePlusDigging,
    DivePlusBoomerang,
    DivePlusChi,
    DivePlusDrone,
    DivePlusGhostImmunity,
    DivePlusGrapple,
    DivePlusHacking,
    DivePlusHazardCleaner,
    DivePlusLazer,
    DivePlusMini,
    DivePlusSilverDestroy,
    DivePlusSonarSmash,
    DivePlusSuperStrength,
    DivePlusTarget,
    DivePlusTechnology,
    DivePlusTracking,
    DivePlusXRay,
    FlightPlusLaser,

    Dodging,
    SwordSwitching,
    SentryTurret,
    WaterSprayOrIce,
    DemonDestroy,
    Disguise,
    Climb,
    Invisibility,
    SlurpAccess,
    Diffindo,
    Parseltongue,
    DarkArts,
    IntelligenceAccess,
    ChargeTransfer,

    Story_Ghostbusters2016,
    Adventure_Ghostbusters2016,
    Adventure_JurassicWorld,
    Adventure_DC,
    Adventure_ATeam,
    Adventure_LegoMovie,
    Adventure_Simpsons,
    Level_Simpsons,
    Story_Batman,
    Adventure_Batman,
    Level_Portal2,
    Adventure_Portal2,
    Adventure_Ninjago,
    Adventure_Chima,
    Adventure_DoctorWho,
    Level_DoctorWho,
    Adventure_BackToTheFuture,
    Level_BackToTheFuture,
    Adventure_MissionImpossible,
    Level_MissionImpossible,
    Adventure_AdventureTime,
    Level_AdventureTime,
    Level_Midway,
    Adventure_Midway,
    Adventure_LordOfTheRing,
    Adventure_HarryPotter,
    Adventure_KnightRider,
    Level_KnightRider,
    Level_Ghostbusters,
    Adventure_Ghostbusters,
    Adventure_ScoobyDoo,
    Adventure_Oz

    /* end of year 1 */
}

export const abilities: AbilityData[] = [
    { id: 0, url: 'atlantis', name: 'Atlantis Pools', desc: 'speak to the fishes', type: AbilityType.Normal, tags: [] },
    { id: 1, url: 'chi-power', name: 'Chi Power', desc: 'use \'Chi Up\'', type: AbilityType.Normal, tags: [] },
    { id: 2, url: 'super-strength', name: 'Super Strength', desc: 'destroy cracked Lego walls', type: AbilityType.Normal, tags: [] }, // aka cracked wall
    { id: 3, url: 'digging', name: 'Digging', desc: 'use dig spots', type: AbilityType.Normal, tags: [] },
    { id: 4, url: 'dive', name: 'Dive', desc: 'dive and swim underwater', type: AbilityType.Normal, tags: [] },
    { id: 5, url: 'drilling', name: 'Drilling', desc: 'drill at drill spots', type: AbilityType.Normal, tags: [] },
    { id: 6, url: 'electricity', name: 'Electricity', desc: 'power eletric coils', type: AbilityType.Normal, tags: [] },
    { id: 7, url: 'fix-it', name: 'Fix-it', desc: 'fix blue glowing Lego objects', type: AbilityType.Normal, tags: [] },
    { id: 8, url: 'flight-dock', name: 'Flight Dock', desc: 'power jet switches', type: AbilityType.Normal, tags: [] },
    { id: 9, url: 'gyrosphere-switch', name: 'Gyropshere Switch', desc: 'use gyrosphere switches', type: AbilityType.Normal, tags: [] },
    { id: 10, url: 'hacking', name: 'Hacking', desc: 'hack terminals', type: AbilityType.Normal, tags: [] },
    { id: 11, url: 'hazard-cleaner', name: 'Hazard Cleaner', desc: 'clear toxic hazards', type: AbilityType.Normal, tags: [] },
    { id: 12, url: 'laser', name: 'Laser', desc: 'destroy gold Lego objects; melt Lego ice', type: AbilityType.Normal, tags: [] },
    { id: 13, url: 'mini-access', name: 'Mini Access', desc: 'enter small hatches', type: AbilityType.Normal, tags: [] },
    { id: 14, url: 'pole-vault', name: 'Pole Vault', desc: 'create extra twirl poles', type: AbilityType.Normal, tags: [] },
    { id: 15, url: 'portal-gun', name: 'Portal Gun', desc: 'fire portals at white Lego panels to reach other areas', type: AbilityType.Normal, tags: [] },
    { id: 16, url: 'rainbow-lego', name: 'Rainbow Lego', desc: 'smash rainbow Lego objects', type: AbilityType.Normal, tags: [] },
    { id: 17, url: 'silver-destroy', name: 'Silver Destroy', desc: 'destroy silver Lego objects', type: AbilityType.Normal, tags: [] },
    { id: 18, url: 'sonar-smash', name: 'Sonar Smash', desc: 'destroy sonar glass', type: AbilityType.Normal, tags: [] },
    { id: 19, url: 'trap-ghosts', name: 'Trap Ghosts', desc: 'clear ghostly swarms', type: AbilityType.Normal, tags: [] },
    { id: 20, url: 'spinjitzu', name: 'Spinjitzu', desc: 'use Spinjitzu switches', type: AbilityType.Normal, tags: [] },
    { id: 22, url: 'target', name: 'Target', desc: 'use target switches', type: AbilityType.Normal, tags: [] },
    { id: 23, url: 'technology', name: 'Technology', desc: 'use technology panels', type: AbilityType.Normal, tags: [] },
    { id: 25, url: 'tow-bar', name: 'Tow Bar', desc: 'pull down weak Lego walls', type: AbilityType.Normal, tags: [] },
    { id: 26, url: 'tracking', name: 'Tracking', desc: 'track trails', type: AbilityType.Normal, tags: [] },
    { id: 27, url: 'vine-cutting', name: 'Vine Cutting', desc: 'cut vines', type: AbilityType.Normal, tags: [] },
    { id: 28, url: 'water-spray', name: 'Water Spray', desc: 'grow Lego plants', type: AbilityType.Normal, tags: [] },
    { id: 29, url: 'weight-switch', name: 'Weight Switch', desc: 'place on cube switches', type: AbilityType.Normal, tags: [] },
    { id: 30, url: 'x-ray-vision', name: 'X-Ray Vision', desc: 'see through green Lego walls', type: AbilityType.Normal, tags: [] },
    { id: 31, url: 'illumination', name: 'Illumination', desc: 'light up dark areas', type: AbilityType.Normal, tags: [] },
    { id: 32, url: 'relic-detector', name: 'Relic Detector', desc: 'unhide objects that are indicated by purple sparkles', type: AbilityType.Normal, tags: [] },
    { id: 33, url: 'big-transformation', name: 'Big Transformation', desc: 'become big and more powerful', type: AbilityType.Normal, tags: [] },
    { id: 34, url: 'hazard-protection', name: 'Hazard Protection', desc: 'enter toxic areas without damage', type: AbilityType.Normal, tags: [] },
    { id: 35, url: 'boomerang', name: 'Batarang', desc: 'throw a boomerang at a switch', type: AbilityType.Normal, tags: [] },
    { id: 36, url: 'grapple', name: 'Grapple', desc: 'use an orange grab point to pull or climb', type: AbilityType.Normal, tags: [] },
    { id: 37, url: 'stealth', name: 'Stealth', desc: 'hide from security cameras', type: AbilityType.Normal, tags: [] },
    { id: 38, url: 'acrobat', name: 'Acrobat', desc: 'jump extra high, climb special walls and grab poles', type: AbilityType.Normal, tags: [] },
    { id: 39, url: 'laser-deflector', name: 'Laser Deflector', desc: 'deflect laser when standing on deflection points', type: AbilityType.Normal, tags: [] },
    { id: 40, url: 'drone', name: 'Drone', desc: 'spawn a small drone controlled by the user', type: AbilityType.Normal, tags: [] },
    { id: 41, url: 'mind-control', name: 'Mind Control', desc: 'take over characters with a question mark above their head', type: AbilityType.Normal, tags: [] },
    { id: 42, url: 'master-build', name: 'Master Build', desc: 'rebuild objects like in the Lego Movie', type: AbilityType.Normal, tags: [] },
    { id: 43, url: 'flying', name: 'Flying', desc: 'fly', type: AbilityType.Normal, tags: [] },
    { id: 44, url: 'invulnerability', name: 'Invulnerability', desc: 'take no damage', type: AbilityType.Normal, tags: [] },
    { id: 45, url: 'speed', name: 'Speed', desc: 'move faster', type: AbilityType.Normal, tags: [] },
    { id: 46, url: 'magic', name: 'Magic', desc: 'move objects with blue stars', type: AbilityType.Normal, tags: [] },
    { id: 47, url: 'magic-shield', name: 'Magic Shield', desc: 'prevent damage using a shield', type: AbilityType.Normal, tags: [] },
    { id: 48, url: 'ice', name: 'Ice', desc: 'freeze other characters and extinguish fire', type: AbilityType.Normal, tags: [] },
    { id: 49, url: 'gliding', name: 'Gliding', desc: 'fall down slower', type: AbilityType.Normal, tags: [] },
    { id: 50, url: 'accelerator-switch', name: 'Accelerator Switch', desc: 'use accelerator switches', type: AbilityType.Normal, tags: [] },
    { id: 51, url: 'cargo-hook', name: 'Cargo Hook', desc: 'grab cargo while flying and place it somewhere else', type: AbilityType.Normal, tags: [] },
    { id: 52, url: 'growth', name: 'Growth', desc: 'grow plants', type: AbilityType.Normal, tags: [] },
    { id: 53, url: 'time-travel-switch', name: 'Time Travel Switch', desc: 'use time travel switches', type: AbilityType.Normal, tags: [] },
    { id: 54, url: 'tardis-pad', name: 'Tardis Pad', desc: 'use the Tardis pads', type: AbilityType.Normal, tags: [] },
    { id: 55, url: 'arcade-station', name: 'Arcade Station', desc: 'use the arcade station pads', type: AbilityType.Normal, tags: [] },
    { id: 56, url: 'suspend-ghost', name: 'Suspend Ghost', desc: 'prepare ghosts for capturing', type: AbilityType.Normal, tags: [] },

    { id: 57, url: 'dive+digging', name: 'Dive + Digging', desc: 'use dig spots underwater', type: AbilityType.Combo, tags: [] },
    { id: 58, url: 'dive+boomerang', name: 'Dive + Boomerang', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 59, url: 'dive+chi', name: 'Dive + Chi', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 60, url: 'dive+drone-access', name: 'Dive + Drone Access', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 61, url: 'dive+ghost-immunity', name: 'Dive + Ghost Immunity', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 62, url: 'dive+grapple', name: 'Dive + Grapple', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 63, url: 'dive+hacking', name: 'Dive + Hacking', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 64, url: 'dive+hazard-cleaner', name: 'Dive + Hazard Cleaner', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 65, url: 'dive+laser', name: 'Dive + Laser', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 66, url: 'dive+mini-access', name: 'Dive + Mini Access', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 67, url: 'dive+silver-destroy', name: 'Dive + Silver Destroy', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 68, url: 'dive+sonar-smash', name: 'Dive + Sonar Smash', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 69, url: 'dive+super-strength', name: 'Dive + Super Strength', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 70, url: 'dive+target', name: 'Dive + Target', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 71, url: 'dive+technology', name: 'Dive + Technology', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 72, url: 'dive+tracking', name: 'Dive + Tracking', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 73, url: 'dive+x-ray-vision', name: 'Dive + X-Ray Vision', desc: '', type: AbilityType.Combo, tags: [] },
    { id: 74, url: 'flight+laser', name: 'Flight + Laser', desc: '', type: AbilityType.Combo, tags: [] },

    { id: 75, url: 'dodging', name: 'Dodging', desc: 'dodge (not confirmed ability)', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.SwordSwitching, url: 'sword-switch', name: 'Sword Switch', desc: 'use sword switches', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: 77, url: 'sentry-turret', name: 'Sentry Turret', desc: 'automatically shoot', type: AbilityType.Normal, tags: [] },
    { id: Ability.WaterSprayOrIce, url: null, name: 'Water Spray or Ice', desc: '', type: AbilityType.Alternative, tags: [] },
    { id: Ability.DemonDestroy, url: null, name: 'Demon Destroy', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.Disguise, url: null, name: 'Disguise', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.Invisibility, url: null, name: 'Invisibility', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.Climb, url: null, name: 'Climb', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.SlurpAccess, url: null, name: 'Slurp Access', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.Diffindo, url: null, name: 'Diffindo', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.Parseltongue, url: null, name: 'Parseltongue', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.DarkArts, url: null, name: 'Dark Arts', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.IntelligenceAccess, url: null, name: 'Intelligence Access', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    { id: Ability.ChargeTransfer, url: null, name: 'Charge Transfer', desc: '', type: AbilityType.Normal, tags: [BuilderTag.Year2] },

    { id: Ability.Story_Ghostbusters2016, url: null, name: 'Ghostbusters 2016 Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Ghostbusters2016, url: null, name: 'Ghostbusters 2016 Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_JurassicWorld, url: null, name: 'Jurassic World Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_DC, url: null, name: 'DC Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_ATeam, url: null, name: 'A-Team Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_LegoMovie, url: null, name: 'Lego Movie Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Simpsons, url: null, name: 'The Simpsons Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_Simpsons, url: null, name: 'The Simpsons Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Story_Batman, url: null, name: 'Lego Batman Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Batman, url: null, name: 'Lego Batman Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_Portal2, url: null, name: 'Portal 2 Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Portal2, url: null, name: 'Portal 2 Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Ninjago, url: null, name: 'Ninjago Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Chima, url: null, name: 'Chima Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_DoctorWho, url: null, name: 'Doctor Who Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_DoctorWho, url: null, name: 'Doctor Who Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_BackToTheFuture, url: null, name: 'Back to the Future Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_BackToTheFuture, url: null, name: 'Back to the Future Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_MissionImpossible, url: null, name: 'Mission: Impossible Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_MissionImpossible, url: null, name: 'Mission: Impossible Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_AdventureTime, url: null, name: 'Adventure Time Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_AdventureTime, url: null, name: 'Adventure Time Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_Midway, url: null, name: 'Midway Arcade Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Midway, url: null, name: 'Midway Arcade Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_LordOfTheRing, url: null, name: 'Lot of the Rings Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_HarryPotter, url: null, name: 'Harry Potter Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_KnightRider, url: null, name: 'Knight Rider Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_KnightRider, url: null, name: 'Knight Rider Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Level_Ghostbusters, url: null, name: 'Ghostbusters Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Ghostbusters, url: null, name: 'Ghostbusters Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_ScoobyDoo, url: null, name: 'Scooby Doo Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    { id: Ability.Adventure_Oz, url: null, name: 'Wizard of Oz Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] }

/*
    { id: , url: '', name: '', desc: '' },
*/
];
