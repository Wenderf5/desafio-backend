import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/dataBase/entities/user-entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetUserService {
    constructor(
        @InjectRepository(User)
        private user_repository: Repository<User>
    ) { }

    async getUser(user_name: string, res: Response) {
        try {
            const db_user: User = await this.user_repository.findOne({ where: { user_name: user_name } });
            if (db_user) {
                return res.status(HttpStatus.OK).send(db_user);
            }
            return res.status(HttpStatus.NOT_FOUND).send({ message: "User not found." });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).send({ message: "Error searching for user." });
        }
    }
}
