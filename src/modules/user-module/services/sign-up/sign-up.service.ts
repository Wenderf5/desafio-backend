import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/dataBase/entities/user-entity/user.entity';
import { Repository } from 'typeorm';
import { newUserDto } from '../../controllers/sign-up/dto/news-user-dto';

@Injectable()
export class SignUpService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>
    ) { }

    async signUp(user: newUserDto, res: Response): Promise<Response> {
        try {
            const db_user: User = await this.user_repository.findOne({ where: { user_name: user.user_name } });
            if (db_user) {
                return res.status(HttpStatus.CONFLICT).send({ message: "this user already exists." });
            }
            await this.user_repository.save(user);
            return res.status(HttpStatus.CREATED).send({ message: "Registered user." });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: "Failed to register user." });
        }
    }
}
