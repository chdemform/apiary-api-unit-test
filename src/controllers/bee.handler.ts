import { RequestHandler } from "express";
import { BeeService } from '../service/bee.service'

export class BeeHandler {

    private beeService: BeeService;

    constructor() {
        this.beeService = new BeeService();
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    getApiaries: RequestHandler = (_, res) => {

        let result = this.beeService.getApiaries();

        res.status(200).json(result);

    };

    /**
     * 
     * @param req 
     * @param res 
     */
    getApiariesToRefect: RequestHandler = (_, res) => {

        let result = this.beeService.getApiariesToRefect();

        res.status(200).json(result);

    };

    /**
     * 
     * @param req 
     * @param res 
     */
    getApiariesToTreatForVarroa: RequestHandler = (_, res) => {

        let result = this.beeService.getApiariesToTreatForVarroa();

        res.status(200).json(result);

    };

    /**
* 
* @param req 
* @param res 
*/
    getApiariesToTrapHornets: RequestHandler = (_, res) => {

        let result = this.beeService.getApiariesToTrapHornet();

        res.status(200).json(result);

    };
}