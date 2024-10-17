import { Controller, Get, Param, Res } from '@nestjs/common';
import { GetUserService } from '../../services/get-user/get-user.service';
import { Response } from 'express';

@Controller()
export class GetUserController {
    constructor(
        private get_user_service: GetUserService
    ) { }

    @Get('/get-user/:user_name')
    getUser(@Param('user_name') user_name: string, @Res() res: Response) {
        return this.get_user_service.getUser(user_name, res);
    }
}
