import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { user } from 'src/dataBase/entyties/user-entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
    constructor(
        @InjectRepository(user)
        private user_repository: Repository<user>
    ) { }

    signUp(user: { name: string }, res: Response) {
        try {
            this.user_repository.save(user);
            return res.status(HttpStatus.CREATED).send();
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send();
        }
    }
}
