import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dataBaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'host',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'data-base-name',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
}