import { Router } from "express";
import { BeeHandler } from "./bee.handler";

export const routerBees = Router();

let beeHandler = new BeeHandler();

routerBees.get('/apiaries', beeHandler.getApiaries);
routerBees.get('/apiaries_to_refect', beeHandler.getApiariesToRefect);
routerBees.get('/apiaries_to_treat_varroa', beeHandler.getApiariesToTreatForVarroa);
routerBees.get('/apiaries_to_trap_hornets', beeHandler.getApiariesToTrapHornets);