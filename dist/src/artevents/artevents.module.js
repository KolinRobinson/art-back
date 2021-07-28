"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArteventsModule = void 0;
const common_1 = require("@nestjs/common");
const artevents_service_1 = require("./artevents.service");
const artevents_controller_1 = require("./artevents.controller");
const sequelize_1 = require("@nestjs/sequelize");
const artevents_model_1 = require("./artevents.model");
let ArteventsModule = class ArteventsModule {
};
ArteventsModule = __decorate([
    common_1.Module({
        providers: [artevents_service_1.ArteventsService],
        controllers: [artevents_controller_1.ArteventsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([artevents_model_1.Artevents])
        ],
        exports: [
            artevents_service_1.ArteventsService
        ]
    })
], ArteventsModule);
exports.ArteventsModule = ArteventsModule;
//# sourceMappingURL=artevents.module.js.map