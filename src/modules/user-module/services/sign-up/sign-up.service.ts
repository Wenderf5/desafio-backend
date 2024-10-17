import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/dataBase/entities/user-entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>
    ) { }

    async signUp(user: { name: string }, res: Response): Promise<Response> {
        try {
            await this.user_repository.save(user);
            return res.status(HttpStatus.CREATED).send({ message: "Registered user." });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: "Failed to register user." });
        }
    }
}
