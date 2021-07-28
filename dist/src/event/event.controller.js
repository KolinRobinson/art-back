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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const event_service_1 = require("./event.service");
const create_event_dto_1 = require("./dto/create-event.dto");
const events_model_1 = require("./events.model");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    create(dto) {
        return this.eventService.createEvents(dto);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create event' }),
    swagger_1.ApiResponse({ status: 200, type: events_model_1.Event }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "create", null);
EventController = __decorate([
    swagger_1.ApiTags('Event'),
    common_1.Controller('event'),
    __metadata("design:paramtypes", [typeof (_a = typeof event_service_1.EventService !== "undefined" && event_service_1.EventService) === "function" ? _a : Object])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map