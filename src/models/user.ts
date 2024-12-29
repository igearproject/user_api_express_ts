import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public age!: number;
  public createdAt!: number;
  public updatedAt!: number;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps: true,
    sequelize: sequelize,
    tableName: "users"
});

export default User;
