import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModuleModule } from './modules/user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './config/dataBaseConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfig),
    UserModuleModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
