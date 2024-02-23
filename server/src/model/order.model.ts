import { DataTypes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Orders',
  modelName: 'Order',
})
class Order extends Model {
    @Column({
      type: DataType.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    })
    id!: number;
  
    @Column(DataType.STRING)
    userName!: string;
  
    @Column(DataType.STRING)
    adress!: string;
  
    @Column(DataType.INTEGER)
    total!: number;
  
    @Column(DataType.ARRAY(DataType.STRING))
    orderList!: string;
}
  
export default Order;