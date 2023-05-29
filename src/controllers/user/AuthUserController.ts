import { Request, Response } from "express";
import { AuthUserService } from "../../Services/user/AuthUserService";

class AuthUserController {
    // sempre vai ter um async HANDLE
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export { AuthUserController }