import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dataBaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'wfas54321',
    database: 'desafio_back_end',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
}