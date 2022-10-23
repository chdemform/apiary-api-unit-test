import { Apiary, ApiaryType, BeeType } from "../models/bees";


//you can't modify this file
export class BeeRepository implements IBeeRepository {

    getApiaries(): Apiary[] {

        const apiary1: Apiary = {
            num: "RUCH_01",
            beeType: BeeType.APIS_APIS,
            apiaryType: ApiaryType.NIGERIAN,
            creationDate: new Date('2018-06-06'),
            lastRefect: new Date('2021-06-06'),
            lastVarroaTreatment: new Date('2022-01-01'),
            lastHornetTrapping: new Date('2020-06-06')
        }

        return [apiary1];
    }
}




export interface IBeeRepository {

    getApiaries(): Apiary[];

}
