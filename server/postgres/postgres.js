import {Sequelize} from "sequelize";
import { createUserModel } from "./../model/userSchema.js";

const sequelize = new Sequelize('myDatabase', 'postgres', 'Zazhef-vidzah-0vymza', {
    host: 'localhost',
    dialect: 'postgres'
  });
  let userModel = null;

  const connection= async () => {
    try {
        await sequelize.authenticate();
        userModel = createUserModel(sequelize);
        await sequelize.sync();
        console.log("Database sync");
        
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export {
    connection,
    userModel
  }