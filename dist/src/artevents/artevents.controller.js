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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArteventsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const artevents_service_1 = require("./artevents.service");
const create_artevents_dto_1 = require("./dto/create-artevents.dto");
const artevents_model_1 = require("./artevents.model");
let ArteventsController = class ArteventsController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    create(dto) {
        return this.eventService.createEvents(dto);
    }
    getAll() {
        return this.eventService.getAllEvents();
    }
    getOneUser(id) {
        return this.eventService.getOneEvent(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create artevents' }),
    swagger_1.ApiResponse({ status: 200, type: artevents_model_1.Artevents }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artevents_dto_1.CreateArteventsDto]),
    __metadata("design:returntype", void 0)
], ArteventsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArteventsController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one events' }),
    swagger_1.ApiResponse({ status: 200, type: artevents_model_1.Artevents }),
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArteventsController.prototype, "getOneUser", null);
ArteventsController = __decorate([
    swagger_1.ApiTags('Artevents'),
    common_1.Controller('artevents'),
    __metadata("design:paramtypes", [artevents_service_1.ArteventsService])
], ArteventsController);
exports.ArteventsController = ArteventsController;
//# sourceMappingURL=artevents.controller.js.map