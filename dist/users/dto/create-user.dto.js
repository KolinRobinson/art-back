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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({ example: 'test@test.ru', description: 'email user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'test123', description: 'login user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "login", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'testPassword!', description: 'password user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '[{"phone": "+78005553535"}]', description: 'Array contacts user' }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "contacts", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '[{"school": "Moscow city, school 17"}]', description: 'Array education user' }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "education", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'lorem ipsum', description: 'info for education user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "educationInfo", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Moscow', description: 'city user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '2021-07-27T19:53:09.152Z', description: 'Birghday user, string ' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "birthday", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'url', description: 'photo user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "photo", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map