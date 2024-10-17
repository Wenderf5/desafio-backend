import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
export class Products {
    @PrimaryColumn()
    product_id: string;
    
    @Column()
    artist: string;

    @Column('year')
    year: number;

    @Column()
    album: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    store: string;

    @Column('text')
    thumb: string;

    @Column('date')
    date: string;
}