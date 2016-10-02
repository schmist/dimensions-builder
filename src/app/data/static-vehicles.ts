import { VehicleData, PieceState } from './data-types';
import { Ability } from './static-abilities';

export const vehicles: VehicleData[] = [
    <VehicleData>{ id: 71170041, name: 'Batmobile', skillIds: [50], packId: 71170, image: 'none', stage: 1, vehicleId: 7117004 },
    <VehicleData>{ id: 71170042, name: 'Batblaster', skillIds: [18, 25, 50], packId: 71170, image: 'none', stage: 2, vehicleId: 7117004 },
    <VehicleData>{ id: 71170043, name: 'Sonic Batray', skillIds: [18, 50], packId: 71170, image: 'none', stage: 3, vehicleId: 7117004 },
    <VehicleData>{ id: 71209021, name: 'Invisible Jet', skillIds: [8, 37, 43, 51, Ability.FlightPlusLaser], packId: 71209, image: '71209021', stage: 1, vehicleId: 7120902 },
    <VehicleData>{ id: 71209022, name: 'Laser Shooter', skillIds: [8, 12, 37, 43, 51], packId: 71209, image: 'none', stage: 2, vehicleId: 7120902 },
    <VehicleData>{ id: 71209023, name: 'Torpedo Bomber', skillIds: [8, 17, 37, 43, 51], packId: 71209, image: 'none', stage: 3, vehicleId: 7120902 },
    <VehicleData>{ id: 71210021, name: 'Cyber Guard', skillIds: [], packId: 71210, image: 'none', stage: 1, vehicleId: 7121002 },
    <VehicleData>{ id: 71210022, name: 'Cyber-Wrecker', skillIds: [2, 3, 17], packId: 71210, image: 'none', stage: 2, vehicleId: 7121002 },
    <VehicleData>{ id: 71210023, name: 'Laser Robot Walker', skillIds: [12], packId: 71210, image: 'none', stage: 3, vehicleId: 7121002 },
    <VehicleData>{ id: 71237021, name: 'Aqua Watercraft', skillIds: [4, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71237, image: 'none', stage: 1, vehicleId: 7123702 },
    <VehicleData>{ id: 71237022, name: 'Seven Seas Speeder', skillIds: [4], packId: 71237, image: 'none', stage: 2, vehicleId: 7123702 },
    <VehicleData>{ id: 71237023, name: 'Trident of Fire', skillIds: [4, 17], packId: 71237, image: 'none', stage: 3, vehicleId: 7123702 },
    <VehicleData>{ id: 71229031, name: 'Joker\'s Chopper', skillIds: [8, 43, 51], packId: 71229, image: 'none', stage: 1, vehicleId: 7122903 },
    <VehicleData>{ id: 71229032, name: 'Mischievous Missile Blaster', skillIds: [8, 43, 51], packId: 71229, image: 'none', stage: 2, vehicleId: 7122903 },
    <VehicleData>{ id: 71229033, name: 'Lock \'n\' Laser Jet', skillIds: [8, 12, 43, 51], packId: 71229, image: 'none', stage: 3, vehicleId: 7122903 },
    <VehicleData>{ id: 71229041, name: 'Quinn Mobile', skillIds: [50], packId: 71229, image: 'none', stage: 1, vehicleId: 7122904 },
    <VehicleData>{ id: 71229042, name: 'Quinn Ultra Racer', skillIds: [25, 50], packId: 71229, image: 'none', stage: 2, vehicleId: 7122904 },
    <VehicleData>{ id: 71229043, name: 'Missile Launcher', skillIds: [17, 50], packId: 71229, image: 'none', stage: 3, vehicleId: 7122904 },
    <VehicleData>{ id: 71240021, name: 'Drill Driver', skillIds: [3, 5], packId: 71240, image: 'none', stage: 1, vehicleId: 7124002 },
    <VehicleData>{ id: 71240022, name: 'Bane Dig \'n\' Drill', skillIds: [3, 5, 25], packId: 71240, image: 'none', stage: 2, vehicleId: 7124002 },
    <VehicleData>{ id: 71240023, name: 'Bane Drill \'n\' Blast', skillIds: [3, 5, 17], packId: 71240, image: 'none', stage: 3, vehicleId: 7124002 },
    <VehicleData>{ id: 71236021, name: 'Hover Pod', skillIds: [8, 43, 51], packId: 71236, image: 'none', stage: 1, vehicleId: 7123602 },
    <VehicleData>{ id: 71236022, name: 'Krypton Striker', skillIds: [8, 43, 51], packId: 71236, image: 'none', stage: 2, vehicleId: 7123602 },
    <VehicleData>{ id: 71236023, name: 'Super Stealth Pod', skillIds: [8, 17, 43, 51], packId: 71236, image: 'none', stage: 3, vehicleId: 7123602 },
    <VehicleData>{ id: 71220021, name: 'Axe Chariot', skillIds: [25, 50], packId: 71220, image: 'none', stage: 1, vehicleId: 7122002 },
    <VehicleData>{ id: 71220022, name: 'Axe Hurler', skillIds: [25, 50], packId: 71220, image: 'none', stage: 2, vehicleId: 7122002 },
    <VehicleData>{ id: 71220023, name: 'Soaring Chariot', skillIds: [8, 43, 25, 51], packId: 71220, image: 'none', stage: 3, vehicleId: 7122002 },
    <VehicleData>{ id: 71218021, name: 'Shelob the Great', skillIds: [3], packId: 71218, image: 'none', stage: 1, vehicleId: 7121802 },
    <VehicleData>{ id: 71218022, name: '8-Legged Stalker', skillIds: [2, 3], packId: 71218, image: 'none', stage: 2, vehicleId: 7121802 },
    <VehicleData>{ id: 71218023, name: 'Poison Slinger', skillIds: [2, 3], packId: 71218, image: 'none', stage: 3, vehicleId: 7121802 },
    <VehicleData>{ id: 71212021, name: 'Emmet\'s Excavator', skillIds: [50], packId: 71212, image: 'none', stage: 1, vehicleId: 7121202 },
    <VehicleData>{ id: 71212022, name: 'Destroy Dozer', skillIds: [3, 25, 50], packId: 71212, image: 'none', stage: 2, vehicleId: 7121202 },
    <VehicleData>{ id: 71212023, name: 'Destruct-o-Mech', skillIds: [2, 3], packId: 71212, image: 'none', stage: 3, vehicleId: 7121202 },
    <VehicleData>{ id: 71213021, name: 'Police Car', skillIds: [25, 50], packId: 71213, image: 'none', stage: 1, vehicleId: 7121302 },
    <VehicleData>{ id: 71213022, name: 'Aerial Squad Car', skillIds: [8, 43, 50, 51], packId: 71213, image: 'none', stage: 2, vehicleId: 7121302 },
    <VehicleData>{ id: 71213023, name: 'Missile Striker', skillIds: [8, 17, 43, 51], packId: 71213, image: 'none', stage: 3, vehicleId: 7121302 },
    <VehicleData>{ id: 71214021, name: 'Benny\'s Spaceship', skillIds: [8, 43, 51], packId: 71214, image: 'none', stage: 1, vehicleId: 7121402 },
    <VehicleData>{ id: 71214022, name: 'Laser Craft', skillIds: [8, 43, 51], packId: 71214, image: 'none', stage: 2, vehicleId: 7121402 }, // no laser ability?
    <VehicleData>{ id: 71214023, name: 'The Annihilator', skillIds: [8, 12, 17, 43, 51], packId: 71214, image: 'none', stage: 3, vehicleId: 7121402 },
    <VehicleData>{ id: 71231021, name: 'Cloud Cuckoo Car', skillIds: [8, 43, 51], packId: 71231, image: 'none', stage: 1, vehicleId: 7123102 },
    <VehicleData>{ id: 71231022, name: 'X-treme Soaker', skillIds: [8, 11, Ability.WaterSpray, 43, 51, 52, Ability.WaterSprayOrIce], packId: 71231, image: 'none', stage: 2, vehicleId: 7123102 },
    <VehicleData>{ id: 71231023, name: 'Rainbow Cannon', skillIds: [8, 43, 51], packId: 71231, image: 'none', stage: 3, vehicleId: 7123102 },
    <VehicleData>{ id: 71207031, name: 'Blade\'s Bike', skillIds: [50, Ability.FlightPlusLaser], packId: 71207, image: 'none', stage: 1, vehicleId: 7120703 },
    <VehicleData>{ id: 71207032, name: 'Flying Fire Bike', skillIds: [8, 25, 43, 51], packId: 71207, image: 'none', stage: 2, vehicleId: 7120703 },
    <VehicleData>{ id: 71207033, name: 'Blades of Fire', skillIds: [8, 12, 43, 51], packId: 71207, image: 'none', stage: 3, vehicleId: 7120703 },
    <VehicleData>{ id: 71207041, name: 'Boulder Bomber', skillIds: [8, 43, 51], packId: 71207, image: 'none', stage: 1, vehicleId: 7120704 },
    <VehicleData>{ id: 71207042, name: 'Boulder Blaster', skillIds: [8, 17, 43, 51], packId: 71207, image: 'none', stage: 2, vehicleId: 7120704 },
    <VehicleData>{ id: 71207043, name: 'Cyclone Jet', skillIds: [8, 43, 51], packId: 71207, image: 'none', stage: 3, vehicleId: 7120704 },
    <VehicleData>{ id: 71215021, name: 'Storm Fighter', skillIds: [8, 43, 51, Ability.FlightPlusLaser], packId: 71215, image: 'none', stage: 1, vehicleId: 7121502 },
    <VehicleData>{ id: 71215022, name: 'Lightning Jet', skillIds: [8, 12, 43, 51], packId: 71215, image: 'none', stage: 2, vehicleId: 7121502 },
    <VehicleData>{ id: 71215023, name: 'Electro-Shooter', skillIds: [6, 8, 12, 43, 51], packId: 71215, image: 'none', stage: 3, vehicleId: 7121502 },
    <VehicleData>{ id: 71216021, name: 'Samurai Mech', skillIds: [2], packId: 71216, image: 'none', stage: 1, vehicleId: 7121602 },
    <VehicleData>{ id: 71216022, name: 'Samurai Shooter', skillIds: [17], packId: 71216, image: 'none', stage: 2, vehicleId: 7121602 },
    <VehicleData>{ id: 71216023, name: 'Soaring Samurai Mech', skillIds: [8, 43, 51], packId: 71216, image: 'none', stage: 3, vehicleId: 7121602 },
    <VehicleData>{ id: 71217021, name: 'Ninja Copter', skillIds: [8, 43, 51, Ability.FlightPlusLaser], packId: 71217, image: 'none', stage: 1, vehicleId: 7121702 },
    <VehicleData>{ id: 71217022, name: 'Glaciator', skillIds: [8, 43, Ability.Ice, 51, Ability.WaterSprayOrIce], packId: 71217, image: 'none', stage: 2, vehicleId: 7121702 },
    <VehicleData>{ id: 71217023, name: 'Freeze Fighter', skillIds: [8, 12, 43, Ability.Ice, 51, Ability.WaterSprayOrIce], packId: 71217, image: 'none', stage: 3, vehicleId: 7121702 },
    <VehicleData>{ id: 71234021, name: 'Flying White Dragon', skillIds: [8, 43, Ability.Ice, Ability.WaterSprayOrIce], packId: 71234, image: 'none', stage: 1, vehicleId: 7123402 },
    <VehicleData>{ id: 71234022, name: 'Golden Fire Dragon', skillIds: [8, 43, Ability.Ice, Ability.WaterSprayOrIce], packId: 71234, image: 'none', stage: 2, vehicleId: 7123402 },
    <VehicleData>{ id: 71234023, name: 'Ultra Destruction Dragon', skillIds: [8, 43, Ability.Ice, Ability.WaterSprayOrIce], packId: 71234, image: 'none', stage: 3, vehicleId: 7123402 },
    <VehicleData>{ id: 71239021, name: 'Lloyd\'s Golden Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 1, vehicleId: 7123902 },
    <VehicleData>{ id: 71239022, name: 'Sword Projector Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 2, vehicleId: 7123902 },
    <VehicleData>{ id: 71239023, name: 'Mega Flight Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 3, vehicleId: 7123902 },
    <VehicleData>{ id: 71201021, name: 'DeLorean Time Machine', skillIds: [50, 53], packId: 71201, image: 'none', stage: 1, vehicleId: 7120102 },
    <VehicleData>{ id: 71201022, name: 'Electric Time Machine', skillIds: [6, 25, 50, 53], packId: 71201, image: 'none', stage: 2, vehicleId: 7120102 },
    <VehicleData>{ id: 71201023, name: 'Ultra Time Machine', skillIds: [8, 17, 43, 51, 53], packId: 71201, image: 'none', stage: 3, vehicleId: 7120102 },
    <VehicleData>{ id: 71230021, name: 'Travelling Time Train', skillIds: [50, 53], packId: 71230, image: 'none', stage: 1, vehicleId: 7123002 },
    <VehicleData>{ id: 71230022, name: 'Flying Time Machine', skillIds: [8, 25, 43, 50, 51, 53], packId: 71230, image: 'none', stage: 2, vehicleId: 7123002 },
    <VehicleData>{ id: 71230023, name: 'Missile Blast Time Train', skillIds: [8, 17, 43, 51, 53], packId: 71230, image: 'none', stage: 3, vehicleId: 7123002 },
    <VehicleData>{ id: 71201031, name: 'Hoverboard', skillIds: [], packId: 71201, image: 'none', stage: 1, vehicleId: 7120103 },
    <VehicleData>{ id: 71201032, name: 'Cyclone Board', skillIds: [], packId: 71201, image: 'none', stage: 2, vehicleId: 7120103 },
    <VehicleData>{ id: 71201033, name: 'Ultimate Hoverjet', skillIds: [17, 43], packId: 71201, image: 'none', stage: 3, vehicleId: 7120103 },
    <VehicleData>{ id: 71206031, name: 'Mystery Machine', skillIds: [50], packId: 71206, image: 'none', stage: 1, vehicleId: 7120603 },
    <VehicleData>{ id: 71206032, name: 'Mystery Tow & Go', skillIds: [25, Ability.WaterSpray, 50, Ability.WaterSprayOrIce], packId: 71206, image: 'none', stage: 2, vehicleId: 7120603 }, // water spray should be same as growth?
    <VehicleData>{ id: 71206033, name: 'Mystery Monster', skillIds: [11, 50, 52], packId: 71206, image: 'none', stage: 3, vehicleId: 7120603 },
    <VehicleData>{ id: 71205031, name: 'Velociraptor', skillIds: [27], packId: 71205, image: 'none', stage: 1, vehicleId: 7120503 },
    <VehicleData>{ id: 71205032, name: 'Spike Attack Raptor', skillIds: [2, 3, 27], packId: 71205, image: 'none', stage: 2, vehicleId: 7120503 },
    <VehicleData>{ id: 71205033, name: 'Venom Raptor', skillIds: [2, 27], packId: 71205, image: 'none', stage: 3, vehicleId: 7120503 },
    <VehicleData>{ id: 71205041, name: 'Gyrosphere', skillIds: [9], packId: 71205, image: 'none', stage: 1, vehicleId: 7120504 },
    <VehicleData>{ id: 71205042, name: 'Sonic Beam Gyrosphere', skillIds: [9, 18], packId: 71205, image: 'none', stage: 2, vehicleId: 7120504 },
    <VehicleData>{ id: 71205043, name: 'Speed Boost Gyrosphere', skillIds: [9, 31, 45], packId: 71205, image: 'none', stage: 3, vehicleId: 7120504 },
    <VehicleData>{ id: 71203031, name: 'Sentry Turret', skillIds: [Ability.SentryTurret], packId: 71203, image: 'none', stage: 1, vehicleId: 7120303 },
    <VehicleData>{ id: 71203032, name: 'Turret Striker', skillIds: [Ability.SentryTurret, 12], packId: 71203, image: 'none', stage: 2, vehicleId: 7120303 },
    <VehicleData>{ id: 71203033, name: 'Flying Turret Carrier', skillIds: [8, 17, 43, 51, Ability.SentryTurret], packId: 71203, image: 'none', stage: 3, vehicleId: 7120303 },
    <VehicleData>{ id: 71202031, name: 'Homer\'s Car', skillIds: [25, 50, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71202, image: 'none', stage: 1, vehicleId: 7120203 },
    <VehicleData>{ id: 71202032, name: 'The Homercraft', skillIds: [], packId: 71202, image: 'none', stage: 2, vehicleId: 7120203 },
    <VehicleData>{ id: 71202033, name: 'The SubmaHomer', skillIds: [4, 17, 50], packId: 71202, image: 'none', stage: 3, vehicleId: 7120203 },
    <VehicleData>{ id: 71211021, name: 'Gravity Sprinter', skillIds: [50], packId: 71211, image: 'none', stage: 1, vehicleId: 7121102 },
    <VehicleData>{ id: 71211022, name: 'Street Shredder', skillIds: [25], packId: 71211, image: 'none', stage: 2, vehicleId: 7121102 },
    <VehicleData>{ id: 71211023, name: 'Sky Clobberer', skillIds: [8, 43, 45, 51], packId: 71211, image: 'none', stage: 3, vehicleId: 7121102 },
    <VehicleData>{ id: 71227021, name: 'Clown Bike', skillIds: [50], packId: 71227, image: 'none', stage: 1, vehicleId: 7122702 },
    <VehicleData>{ id: 71227022, name: 'Cannon Bike', skillIds: [25, 50], packId: 71227, image: 'none', stage: 2, vehicleId: 7122702 },
    <VehicleData>{ id: 71227023, name: 'Anti-Gravity Rocket Bike', skillIds: [8, 43, 51], packId: 71227, image: 'none', stage: 3, vehicleId: 7122702 },
    <VehicleData>{ id: 71223021, name: 'Swamp Skimmer', skillIds: [Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71223, image: 'none', stage: 1, vehicleId: 7122302 },
    <VehicleData>{ id: 71223022, name: 'Cragger\'s Fireship', skillIds: [], packId: 71223, image: 'none', stage: 2, vehicleId: 7122302 },
    <VehicleData>{ id: 71223023, name: 'Croc Command Sub', skillIds: [4, 17], packId: 71223, image: 'none', stage: 3, vehicleId: 7122302 },
    <VehicleData>{ id: 71222021, name: 'Mighty Lion Rider', skillIds: [50], packId: 71222, image: 'none', stage: 1, vehicleId: 7122202 },
    <VehicleData>{ id: 71222022, name: 'Lion Blazer', skillIds: [25, 50], packId: 71222, image: 'none', stage: 2, vehicleId: 7122202 },
    <VehicleData>{ id: 71222023, name: 'Fire Lion', skillIds: [50], packId: 71222, image: 'none', stage: 3, vehicleId: 7122202 },
    <VehicleData>{ id: 71232021, name: 'Eagle Interceptor', skillIds: [8, 43, 51], packId: 71232, image: 'none', stage: 1, vehicleId: 7123202 },
    <VehicleData>{ id: 71232022, name: 'Eagle Sky Blazer', skillIds: [8, 17, 43, 51], packId: 71232, image: 'none', stage: 2, vehicleId: 7123202 },
    <VehicleData>{ id: 71232023, name: 'Eagle Swoop Diver', skillIds: [8, 43, 51], packId: 71232, image: 'none', stage: 3, vehicleId: 7123202 },
    <VehicleData>{ id: 71221021, name: 'Winged Monkey', skillIds: [43], packId: 71221, image: 'none', stage: 1, vehicleId: 7122102 },
    <VehicleData>{ id: 71221022, name: 'Battle Monkey', skillIds: [43, 17], packId: 71221, image: 'none', stage: 2, vehicleId: 7122102 },
    <VehicleData>{ id: 71221023, name: 'Commander Monkey', skillIds: [43, 18], packId: 71221, image: 'none', stage: 3, vehicleId: 7122102 },
    <VehicleData>{ id: 71204021, name: 'TARDIS', skillIds: [8, 37, 43, 51, 54, Ability.FlightPlusLaser], packId: 71204, image: 'none', stage: 1, vehicleId: 7120402 },
    <VehicleData>{ id: 71204022, name: 'Laser-Pulse TARDIS', skillIds: [8, 12, 37, 43, 51, 54], packId: 71204, image: 'none', stage: 2, vehicleId: 7120402 },
    <VehicleData>{ id: 71204023, name: 'Energy-Burst TARDIS', skillIds: [8, 37, 43, 51, 54], packId: 71204, image: 'none', stage: 3, vehicleId: 7120402 },
    <VehicleData>{ id: 71204031, name: 'K-9', skillIds: [17], packId: 71204, image: 'none', stage: 1, vehicleId: 7120403 },
    <VehicleData>{ id: 71204032, name: 'K-9 Ruff Rover', skillIds: [18], packId: 71204, image: 'none', stage: 2, vehicleId: 7120403 },
    <VehicleData>{ id: 71204033, name: 'K-9 Laser Cutter', skillIds: [12], packId: 71204, image: 'none', stage: 3, vehicleId: 7120403 },
    <VehicleData>{ id: 71238021, name: 'Dalek', skillIds: [], packId: 71238, image: 'none', stage: 1, vehicleId: 7123802 },
    <VehicleData>{ id: 71238022, name: 'Fire \'n\' Ride Dalek', skillIds: [12], packId: 71238, image: 'none', stage: 2, vehicleId: 7123802 },
    <VehicleData>{ id: 71238023, name: 'Silver Shooter Dalek', skillIds: [8, 17, 43, 51], packId: 71238, image: 'none', stage: 3, vehicleId: 7123802 },
    <VehicleData>{ id: 71228021, name: 'Ecto-1', skillIds: [50, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71228, image: 'none', stage: 1, vehicleId: 7122802 },
    <VehicleData>{ id: 71228022, name: 'Ecto-1 Blaster', skillIds: [17, 25, 52], packId: 71228, image: 'none', stage: 2, vehicleId: 7122802 }, // dive should be 3?, 4, 11, 28
    <VehicleData>{ id: 71228023, name: 'Ecto-1 Water Diver', skillIds: [4, 11, Ability.WaterSpray, Ability.WaterSprayOrIce], packId: 71228, image: 'none', stage: 3, vehicleId: 7122802 },
    <VehicleData>{ id: 71233021, name: 'Terror Dog', skillIds: [], packId: 71233, image: 'none', stage: 1, vehicleId: 7123302 },
    <VehicleData>{ id: 71233022, name: 'Terror Dog Destroyer', skillIds: [3, 17], packId: 71233, image: 'none', stage: 2, vehicleId: 7123302 },
    <VehicleData>{ id: 71233023, name: 'Soaring Terror Dog', skillIds: [43], packId: 71233, image: 'none', stage: 3, vehicleId: 7123302 },
    <VehicleData>{ id: 71235021, name: 'G-6155 Spy Hunter', skillIds: [25, 50, Ability.DivePlusTarget], packId: 71235, image: 'none', stage: 1, vehicleId: 7123502 },
    <VehicleData>{ id: 71235022, name: 'Interdiver', skillIds: [17], packId: 71235, image: 'none', stage: 2, vehicleId: 7123502 },
    <VehicleData>{ id: 71235023, name: 'Aerial Spyhunter', skillIds: [8, 12, 43, 51], packId: 71235, image: 'none', stage: 3, vehicleId: 7123502 },
    <VehicleData>{ id: 71219021, name: 'Arrow Launcher', skillIds: [50], packId: 71219, image: 'none', stage: 1, vehicleId: 7121902 },
    <VehicleData>{ id: 71219022, name: 'Seeking Shooter', skillIds: [25, 50], packId: 71219, image: 'none', stage: 2, vehicleId: 7121902 },
    <VehicleData>{ id: 71219023, name: 'Triple Ballista', skillIds: [50], packId: 71219, image: 'none', stage: 3, vehicleId: 7121902 },
    <VehicleData>{ id: 71203041, name: 'Companion Cube', skillIds: [29], packId: 71203, image: 'none', stage: 1, vehicleId: 7120403 },
    <VehicleData>{ id: 71203042, name: 'Laser Deflector', skillIds: [29, 39], packId: 71203, image: 'none', stage: 2, vehicleId: 7120403 },
    <VehicleData>{ id: 71203043, name: 'Gold Heart Emitter', skillIds: [29], packId: 71203, image: 'none', stage: 3, vehicleId: 7120403 },
    <VehicleData>{ id: 71206031, name: 'Scooby Snack', skillIds: [2], packId: 71206, image: 'none', stage: 1, vehicleId: 7120603 },
    <VehicleData>{ id: 71206032, name: 'Scooby Fire Snack', skillIds: [12], packId: 71206, image: 'none', stage: 2, vehicleId: 7120603 },
    <VehicleData>{ id: 71206033, name: 'Scooby Ghost Snack', skillIds: [37], packId: 71206, image: 'none', stage: 3, vehicleId: 7120603 },
    <VehicleData>{ id: 71202021, name: 'Taunt-o-Vision', skillIds: [17], packId: 71202, image: 'none', stage: 1, vehicleId: 7120202 },
    <VehicleData>{ id: 71202022, name: 'Blast Cam', skillIds: [], packId: 71202, image: 'none', stage: 2, vehicleId: 7120202 },
    <VehicleData>{ id: 71202023, name: 'The MechaHomer', skillIds: [12], packId: 71202, image: 'none', stage: 3, vehicleId: 7120202 },
    <VehicleData>{ id: 71241021, name: 'Slime Shooter', skillIds: [], packId: 71241, image: 'none', stage: 1, vehicleId: 7124102 }, // nothing?
    <VehicleData>{ id: 71241022, name: 'Slime Exploder', skillIds: [], packId: 71241, image: 'none', stage: 2, vehicleId: 7124102 },
    <VehicleData>{ id: 71241023, name: 'Slime Streamer', skillIds: [17], packId: 71241, image: 'none', stage: 3, vehicleId: 7124102 },
    <VehicleData>{ id: 71228031, name: 'Ghost Trap', skillIds: [19], packId: 71228, image: 'none', stage: 1, vehicleId: 7122803 },
    <VehicleData>{ id: 71228032, name: 'Ghost Stun \'n\' Trap', skillIds: [19], packId: 71228, image: 'none', stage: 2, vehicleId: 7122803 },
    <VehicleData>{ id: 71228033, name: 'Proton Zapper', skillIds: [19], packId: 71228, image: 'none', stage: 3, vehicleId: 7122803 },
    <VehicleData>{ id: 71235031, name: 'Arcade Machine', skillIds: [55], packId: 71235, image: 'none', stage: 1, vehicleId: 7123503 },
    <VehicleData>{ id: 71235032, name: '8-Bit Shooter', skillIds: [55], packId: 71235, image: 'none', stage: 2, vehicleId: 7123503 },
    <VehicleData>{ id: 71235033, name: 'The Pixelator', skillIds: [55], packId: 71235, image: 'none', stage: 3, vehicleId: 7123503 }, // nothing?
    <VehicleData>{ id: 71246031, name: 'Lumpy Car', skillIds: [], packId: 71246, image: 'none', stage: 1, vehicleId: 7124603, state: PieceState.New },
    <VehicleData>{ id: 71246032, name: 'Lumpy Truck', skillIds: [], packId: 71246, image: 'none', stage: 2, vehicleId: 7124603, state: PieceState.New },
    <VehicleData>{ id: 71246033, name: 'Lumpy Land Whale', skillIds: [], packId: 71246, image: 'none', stage: 3, vehicleId: 7124603, state: PieceState.New },
    <VehicleData>{ id: 71246041, name: 'BMO', skillIds: [], packId: 71246, image: 'none', stage: 1, vehicleId: 7124604, state: PieceState.New },
    <VehicleData>{ id: 71246042, name: 'DOGMO', skillIds: [], packId: 71246, image: 'none', stage: 2, vehicleId: 7124604, state: PieceState.New },
    <VehicleData>{ id: 71246043, name: 'SNAKEMO', skillIds: [], packId: 71246, image: 'none', stage: 3, vehicleId: 7124604, state: PieceState.New },
    <VehicleData>{ id: 71245021, name: 'Ancient War Elephant', skillIds: [], packId: 71245, image: 'none', stage: 1, vehicleId: 7124502, state: PieceState.New },
    <VehicleData>{ id: 71245022, name: 'Cosmic Squid', skillIds: [], packId: 71245, image: 'none', stage: 2, vehicleId: 7124502, state: PieceState.New },
    <VehicleData>{ id: 71245023, name: 'Psychic Submarine', skillIds: [], packId: 71245, image: 'none', stage: 3, vehicleId: 7124502, state: PieceState.New },
    <VehicleData>{ id: 71245031, name: 'Jakemobile', skillIds: [], packId: 71245, image: 'none', stage: 1, vehicleId: 7124503, state: PieceState.New },
    <VehicleData>{ id: 71245032, name: 'Snail Dude Jake', skillIds: [], packId: 71245, image: 'none', stage: 2, vehicleId: 7124503, state: PieceState.New },
    <VehicleData>{ id: 71245033, name: 'Hover Jake', skillIds: [], packId: 71245, image: 'none', stage: 3, vehicleId: 7124503, state: PieceState.New },
    <VehicleData>{ id: 71248021, name: 'IMF Scrambler', skillIds: [], packId: 71248, image: 'none', stage: 1, vehicleId: 7124802, state: PieceState.New },
    <VehicleData>{ id: 71248022, name: 'ShockCycle', skillIds: [], packId: 71248, image: 'none', stage: 2, vehicleId: 7124802, state: PieceState.New },
    <VehicleData>{ id: 71248023, name: 'IMF Covert Jet', skillIds: [], packId: 71248, image: 'none', stage: 3, vehicleId: 7124802, state: PieceState.New },
    <VehicleData>{ id: 71248031, name: 'IMF Sport Car', skillIds: [], packId: 71248, image: 'none', stage: 1, vehicleId: 7124803, state: PieceState.New },
    <VehicleData>{ id: 71248032, name: 'IMF Tank', skillIds: [], packId: 71248, image: 'none', stage: 2, vehicleId: 7124803, state: PieceState.New },
    <VehicleData>{ id: 71248033, name: 'The IMF-Splorer', skillIds: [], packId: 71248, image: 'none', stage: 3, vehicleId: 7124803, state: PieceState.New },
    <VehicleData>{ id: 71251021, name: 'B.A.\'s Van', skillIds: [], packId: 71251, image: 'none', stage: 1, vehicleId: 7125102, state: PieceState.New },
    <VehicleData>{ id: 71251022, name: 'Fool Smasher', skillIds: [], packId: 71251, image: 'none', stage: 2, vehicleId: 7125102, state: PieceState.New },
    <VehicleData>{ id: 71251023, name: 'The Pain Plane', skillIds: [], packId: 71251, image: 'none', stage: 3, vehicleId: 7125102, state: PieceState.New },
    <VehicleData>{ id: 71247031, name: 'Enchanted Car', skillIds: [], packId: 71247, image: 'none', stage: 1, vehicleId: 7124703, state: PieceState.New },
    <VehicleData>{ id: 71247032, name: 'Shark Sub', skillIds: [], packId: 71247, image: 'none', stage: 2, vehicleId: 7124703, state: PieceState.New },
    <VehicleData>{ id: 71247033, name: 'Monstrous Mouth', skillIds: [], packId: 71247, image: 'none', stage: 3, vehicleId: 7124703, state: PieceState.New },
    <VehicleData>{ id: 71247041, name: 'Hogwarts Express', skillIds: [], packId: 71247, image: 'none', stage: 1, vehicleId: 7124704, state: PieceState.New },
    <VehicleData>{ id: 71247042, name: 'Steam Warrior', skillIds: [], packId: 71247, image: 'none', stage: 2, vehicleId: 7124704, state: PieceState.New },
    <VehicleData>{ id: 71247043, name: 'Soaring Steam Plane', skillIds: [], packId: 71247, image: 'none', stage: 3, vehicleId: 7124704, state: PieceState.New },
    <VehicleData>{ id: 71242021, name: 'Ecto 1', skillIds: [], packId: 71242, image: 'none', stage: 1, vehicleId: 7124202, state: PieceState.New },
    <VehicleData>{ id: 71242022, name: 'Ectozer', skillIds: [], packId: 71242, image: 'none', stage: 2, vehicleId: 7124202, state: PieceState.New },
    <VehicleData>{ id: 71242023, name: 'The PerfEcto', skillIds: [], packId: 71242, image: 'none', stage: 3, vehicleId: 7124202, state: PieceState.New },
/*
    { id: 021, name: '', skillIds: [], packId: , image: 'none', stage: 1, vehicleId:  },
    { id: 022, name: '', skillIds: [], packId: , image: 'none', stage: 2, vehicleId:  },
    { id: 023, name: '', skillIds: [], packId: , image: 'none', stage: 3, vehicleId:  },
*/];
