import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModuleModule } from './modules/user-module/user-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './config/dataBaseConfig';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => dataBaseConfig(configService),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    UserModuleModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
