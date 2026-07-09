import { BuildingObjects } from "./mapObjects/obstacles/buildingObjects"
import { CrateDefs } from "./mapObjects/obstacles/crates"
import { Decals } from "./mapObjects/obstacles/decals"
import { Furniture } from "./mapObjects/obstacles/furniture"
import { Interactables } from "./mapObjects/obstacles/interactables"
import { LootSpawners } from "./mapObjects/obstacles/loot"
import { MapObstacles } from "./mapObjects/obstacles/mapObstacles"
import { Buildings } from "./mapObjects/buildings/buildings"
import { Bunkers } from "./mapObjects/buildings/bunkers"
import { Structures } from "./mapObjects/buildings/structures"
import type { MapObjectDef } from "./mapObjectsTyping"

export const ObjectDefIndex = {
    ...BuildingObjects,
    ...Buildings,
    ...Bunkers,
    ...CrateDefs,
    ...Decals,
    ...Furniture,
    ...Interactables,
    ...LootSpawners,
    ...MapObstacles,
    ...Structures
} as const satisfies Record<string, MapObjectDef>;