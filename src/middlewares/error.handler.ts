import { NextFunction, Request, Response } from "express";


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

    res.status(500).send("Erreur serveur");

}