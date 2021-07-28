import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
interface UserCreationAttrs {
    email: string;
    login: string;
    password: string;
    contacts: string[];
    education: string[];
    city: string;
    birthday: string;
    photo: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    login: string;
    password: string;
    contacts: string[];
    education: string[];
    educationInfo: string;
    city: string;
    birthday: string;
    photo: string;
    roles: Role[];
}
export {};
