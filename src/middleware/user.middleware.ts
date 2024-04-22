import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export const UserMiddleware = async (req: Request, res: Response, next: Function) => {
    next();
    try {
        const jwt = req.cookies['jwt'];
        const payloadLocation = 1;
        const payload = JSON.parse(atob(jwt.split('.')[payloadLocation]));

        if (!payload) {
            return res.status(401).send({
                message: 'unauthenticated'
            });
        }


        const user = await getRepository(User).findOne({ email: payload.email });

        if (!user) {
            return res.status(401).send({
                message: 'must complete user profile'
            });
        }

        req["user"] = user;

        next();
    } catch (e) {
        return res.status(401).send({
            message: 'unauthenticated'
        });
    }
}
