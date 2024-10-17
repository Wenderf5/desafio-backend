import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { newUserDto } from './dto/news-user-dto';
import { Response } from 'express';

@Controller()
export class SignUpController {
    constructor(
        private sign_up_service: SignUpService
    ) { }

    @Post('/sign-up')
    signUp(@Body() body: newUserDto, @Res() res: Response) {
        return this.sign_up_service.signUp(body, res);
    }
}
