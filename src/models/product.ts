// src/models/Product.ts
import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript';
import { Order } from './orders';

@Table({
    tableName: 'products',
    timestamps: true, // Si deseas que Sequelize maneje los timestamps automáticamente
})
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price!: number;

    @HasMany(() => Order)
    orders!: Order[];
    
}
