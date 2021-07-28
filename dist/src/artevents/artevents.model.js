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
exports.Artevents = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Artevents = class Artevents extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'uniq id users' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Artevents.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'ТВОЕ МЕСТО У МАСЛЁНКИ', description: 'title artevents' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Artevents.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'выставка РАБОТ АНДРЕЯ САМОЗВАННОГО', description: 'subtitle artevents' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Artevents.prototype, "subtitle", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '22 — 34 СЕНТЯБРЯ 2021', description: 'date artevents' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Artevents.prototype, "dateEvent", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '15_AkemiTakeya_LemonismXActionism_mumok_33(c)KarolinaMiernik 3', description: 'mainImage artevents' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Artevents.prototype, "mainImage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Первые годы биографии Айвазовского прошли в бедности в результате разорения', description: 'second title artevents' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false }),
    __metadata("design:type", String)
], Artevents.prototype, "secondTitle", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '["имназию Симферополя. Увлечен", "{"image": "15_AkemiTakeya_LemonismXActionism_mumok_33(c)KarolinaMiernik 3"}", "имназию Симферополя. Увлечен"]', description: 'content: json string' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT), allowNull: false }),
    __metadata("design:type", Array)
], Artevents.prototype, "content", void 0);
Artevents = __decorate([
    sequelize_typescript_1.Table({ tableName: 'artevents' })
], Artevents);
exports.Artevents = Artevents;
//# sourceMappingURL=artevents.model.js.map