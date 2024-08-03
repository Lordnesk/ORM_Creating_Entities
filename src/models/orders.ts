import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
  } from "sequelize-typescript";
  import { Product } from './product';
  import { User } from './user';
  
  @Table({
    tableName: "orders",
    timestamps: true,
  })
  export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    price!: Number;
  
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId!: number;

    @BelongsTo(() => Product)
    product!: Product;

  }
  