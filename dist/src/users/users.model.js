"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const roles_model_1 = require("../roles/roles.model");
const user_roles_model_1 = require("../roles/user-roles.model");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'uniq id users' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'test@test.ru', description: 'email user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'test123', description: 'login user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'testPassword!', description: 'password user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '[{"phone": "+78005553535"}]', description: 'Array contacts user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT), unique: true, allowNull: false }),
    __metadata("design:type", Array)
], User.prototype, "contacts", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '[{"school": "Moscow city, school 17"}]', description: 'Array education user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT), allowNull: false }),
    __metadata("design:type", Array)
], User.prototype, "education", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'lorem ipsum', description: 'info for education user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "educationInfo", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Moscow', description: 'city user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-07-27T19:53:09.152Z', description: 'Birghday user, format ISO string' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'url', description: 'photo user' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => roles_model_1.Role, () => user_roles_model_1.UserRoles),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    sequelize_typescript_1.Table({ tableName: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=users.model.js.map