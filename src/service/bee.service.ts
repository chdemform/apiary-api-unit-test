import { Apiary, ApiaryType, BeeType } from "../models/bees";
import { BeeRepository } from "../repository/bee.repository";


export class BeeService {


    private beeRepository: BeeRepository;

    constructor() {
        this.beeRepository = new BeeRepository();
    }

    /**
     * 
     * @returns 
     */
    getApiaries(): Apiary[] {

        return this.beeRepository.getApiaries()

    }

    /**
     * 
     * @returns apiaries which should be refected
     */
    getApiariesToRefect(): Apiary[] {

        let apiaries = this.beeRepository.getApiaries();


        let apiariesToRefect = apiaries.filter(apiary => {
            return apiary.apiaryType === ApiaryType.DADANT && apiary.lastRefect < this.removeYearsFromDate(3)
                || apiary.apiaryType === ApiaryType.WARRE && apiary.lastRefect < this.removeYearsFromDate(2)
                || apiary.apiaryType === ApiaryType.NIGERIAN && apiary.lastRefect < this.removeYearsFromDate(1)
        });

        return apiariesToRefect;

    }

    /**
     * 
     * @returns apiaries which should be treated against varroa
     */
    getApiariesToTreatForVarroa(): Apiary[] {

        let apiaries = this.beeRepository.getApiaries();

        let apiariesToRefect = apiaries.filter(apiary => {
            return apiary.beeType === BeeType.APIS_APIS && apiary.lastVarroaTreatment < this.removeYearsFromDate(1)
                || apiary.beeType === BeeType.BUCKFAST && apiary.lastVarroaTreatment < this.removeYearsFromDate(1)
        });

        return apiariesToRefect;

    }

    /**
  * 
  * @returns apiaries whom hornets traps should be replaced
  */
    getApiariesToTrapHornet(): Apiary[] {

        let apiaries = this.beeRepository.getApiaries();


        let apiariesToRefect = apiaries.filter(apiary => {
            return apiary.beeType !== BeeType.NOIRES && apiary.lastHornetTrapping < this.removeYearsFromDate(1)
        });

        return apiariesToRefect;
        
    }


    /**
     * 
     * @param yearsBefore 
     * @returns 
     */
    private removeYearsFromDate(yearsBefore: number): Date {
        let date = new Date();
        date.setFullYear(new Date().getFullYear() - yearsBefore);
        return date;
    }
}

