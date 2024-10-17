import { Module } from '@nestjs/common';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user-entity/user.entity';
import { GetUserController } from './controllers/get-user/get-user.controller';
import { GetUserService } from './services/get-user/get-user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [SignUpController, GetUserController],
    providers: [SignUpService, GetUserService]
})
export class UserModuleModule { }
