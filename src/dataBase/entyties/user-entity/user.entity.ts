import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class user {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column()
    name: string;
}