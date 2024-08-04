import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
  } from "sequelize-typescript"; // We import all this so sequelize can recognice the object as a table
  import { Product } from './product';
  import { User } from './user';
  
  @Table({ // All the parameters are going to be below the decorator 
    tableName: "orders",
    timestamps: true,
  })
  export class Order extends Model { // Here we are going to create a class that is going to be treated as a table 
    @PrimaryKey // this decorator create a PK in this property
    @AutoIncrement // and is going to be autoincrementable
    @Column({ // and at the end is going to be a column
      type: DataType.INTEGER, // now we define the type of data that is going to get
    })
    id!: number; // and with typing the property we are going to make sure that is going to receive only numbers
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false, // Here we make sure that is not going to receive a null data
    })
    price!: Number;
  
    @ForeignKey(() => User) // With this decorator we define that the property is going to have a foreing key
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User) // And here we are going to define were it belongs
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
  