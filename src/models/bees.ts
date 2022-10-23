export interface Apiary {
    num: string,
    beeType: BeeType,
    apiaryType: ApiaryType,
    creationDate : Date,
    lastRefect : Date,
    lastVarroaTreatment: Date,
    lastHornetTrapping : Date
}

export enum ApiaryType {
    WARRE = "warré",
    DADANT = "Dadant",
    NIGERIAN = "Nigériane"
}

export enum BeeType{
    NOIRES = "Abeilles noires",
    APIS_APIS = "Abeilles européennes",
    BUCKFAST = "Abeilles Buckfast"

}

