import { Module } from '@nestjs/common';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignUpController } from './controllers/sign-up/sign-up.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/dataBase/entyties/user-entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([user])],
    controllers: [SignUpController],
    providers: [SignUpService]
})
export class UserModuleModule { }
