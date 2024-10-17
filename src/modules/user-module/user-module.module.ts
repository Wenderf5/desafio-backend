import { Module } from '@nestjs/common';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/dataBase/entities/user-entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [SignUpController],
    providers: [SignUpService]
})
export class UserModuleModule { }
