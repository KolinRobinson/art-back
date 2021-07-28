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
exports.CreateEventsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEventsDto {
}
__decorate([
    swagger_1.ApiProperty({ example: 'ТВОЕ МЕСТО У МАСЛЁНКИ', description: 'title event' }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'выставка РАБОТ АНДРЕЯ САМОЗВАННОГО', description: 'subtitle event' }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "subtitle", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '22 — 34 СЕНТЯБРЯ 2021', description: 'date event' }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "dateEvent", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '15_AkemiTakeya_LemonismXActionism_mumok_33(c)KarolinaMiernik 3', description: 'mainImage event' }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "mainImage", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Первые годы биографии Айвазовского прошли в бедности в результате разорения', description: 'second title event' }),
    __metadata("design:type", String)
], CreateEventsDto.prototype, "secondTitle", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '["имназию Симферополя. Увлечен", "{"image": "15_AkemiTakeya_LemonismXActionism_mumok_33(c)KarolinaMiernik 3"}", "имназию Симферополя. Увлечен"]', description: 'content: json string' }),
    __metadata("design:type", Array)
], CreateEventsDto.prototype, "content", void 0);
exports.CreateEventsDto = CreateEventsDto;
//# sourceMappingURL=create-events.dto.js.map