const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  }
});

module.exports = mongoose.model('Product',productSchema);


























// const mongodb = require('mongodb');
// const getdb = require("../util/database").getDb;

// class Product {
//   constructor(title, price, description, imageUrl,id,userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectID(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getdb();
//     let dbOp;
//     if(this._id)
//     {
//       dbOp=db.collection('products').updateOne({_id:this._id},{ $set:this});
//     }
//     else{
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
  
//   static fetchAll() {
//     const db = getdb();
//     return db
//     .collection('products')
//     .find()
//     .toArray()
//     .then(products=>{
//       console.log(products);
//       return products;
//     })
//     .catch(err=>{
//       console.log(err);
//     });
//   }



//   static findByPk(prodId) {
//     const db = getdb();
//     return db
//     .collection('products')
//     .find({_id:new mongodb.ObjectID(prodId)})
//     .next()
//     .then(product=>{
//       console.log(product);
//       return product;
//     })
//     .catch(err=>{
//       console.log(err);
//     });
//   }

//   static deleteById(prodId)
//   {
//     const db = getdb();
//     return db
//     .collection('products')
//     .deleteOne({_id:new mongodb.ObjectID(prodId)})
//     .then(result=>{
//       console.log('deleted');
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
// }

// module.exports = Product;

// // const Product = sequelize.define('product',{
// //   id:{
// //     type:Sequelize.INTEGER,
// //     autoIncrement:true,
// //     primaryKey:true,
// //     allowNull:false
// //   },
// //   title:Sequelize.STRING,
// //   price:{
// //     type:Sequelize.DOUBLE,
// //     allowNull:false
// //   },
// //   imageUrl:{
// //     type:Sequelize.STRING,
// //     allowNull:false
// //   },
// //   description:{
// //     type:Sequelize.STRING,
// //     allowNull:false
// //   }
// // });
