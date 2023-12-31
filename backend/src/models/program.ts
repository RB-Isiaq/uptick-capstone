import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../config/database";

export interface ProgramAttributes {
  programId?: string;
  name: string;
  description: string;
  type: string;
  curriculumOutline: string[];
  objectives?: string;
  benefits?: string;
  prerequisites?: string;
  duration?: string;
  enrollmentInformation?: string;
  startDate: Date | string;
  endDate: Date | string;
  status?: string;
}

class Program
  extends Model<InferAttributes<Program>, InferCreationAttributes<Program>>
  implements ProgramAttributes
{
  declare programId: CreationOptional<string>;
  declare name: string;
  declare description: string;
  declare type: string;
  declare curriculumOutline: string[];
  declare objectives?: string;
  declare benefits?: string;
  declare prerequisites?: string;
  declare duration?: string;
  declare enrollmentInformation?: string;
  declare startDate: Date | string;
  declare endDate: Date | string;
  declare status?: string;
}

Program.init(
  {
    programId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    curriculumOutline: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    objectives: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    benefits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prerequisites: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enrollmentInformation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "open",
    },
  },
  { sequelize, modelName: "program" },
);

export default Program;
