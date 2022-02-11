import { Controller } from "../../../../core/presentation/contracts/controllers";
import { Request, Response } from "express";
import { notFound, ok, serverError } from "../../../../core/presentation/helpers/helpers";
import { MessageRepository } from "../../infra/repositories/MessageRepository";

export class DeleteMessageController implements Controller {

    async handle(req: Request, res: Response) {
        try {
            const { uid, uid_user } = req.params;

            const respository = new MessageRepository();

            const message = await respository.deleteMessage(uid, uid_user);
            
            if (!message) return notFound(res)

            return ok(res, message)
        } catch (error: any) {
            return serverError(res, error);
        }

    }
}