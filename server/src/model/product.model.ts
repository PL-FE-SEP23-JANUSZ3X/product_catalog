// import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

// @Table({
//   tableName: 'Product',
//   modelName: 'Product',
// })
// export class Product extends Model {
//   @Column(DataType.STRING)
//   name?: string
// }

// // const Product = sequelize.define('Product', {
// //     id: {
// //         type: DataTypes.STRING,
// //         primaryKey: true,
// //         defaultValue: DataTypes.UUIDV4,
// //       },
// //       category: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //       },
// //       itemId: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //         unique: true,
// //       },
// //       name: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //       fullPrice: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //       },
// //       price: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //       },
// //       screen: {
// //         type: DataTypes.STRING,
// //         allowNull: true,
// //       },
// //       capacity: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //       },
// //       color: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //       },
// //       ram: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //       },
// //       year: {
// //         type: DataTypes.INTEGER,
// //         allowNull: true
// //       },
// //       image: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //       }
// //     }, {
// //       tableName: 'Products',
// //       timestamps: false
// //     });

// export default Product;