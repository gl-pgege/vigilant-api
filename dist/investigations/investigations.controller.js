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
exports.InvestigationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const investigations_service_1 = require("./investigations.service");
let InvestigationsController = class InvestigationsController {
    investigationsService;
    constructor(investigationsService) {
        this.investigationsService = investigationsService;
    }
    findAllAlerts() {
        return this.investigationsService.findAllAlerts();
    }
    findAlert(id) {
        return this.investigationsService.findAlert(id);
    }
    findInvestigationSteps(alertId) {
        return this.investigationsService.findInvestigationSteps(alertId);
    }
    findInvestigationStep(alertId, stepId) {
        return this.investigationsService.findInvestigationStep(alertId, stepId);
    }
};
exports.InvestigationsController = InvestigationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all alerts' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of alerts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], InvestigationsController.prototype, "findAllAlerts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get alert by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert details' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], InvestigationsController.prototype, "findAlert", null);
__decorate([
    (0, common_1.Get)(':id/analysis'),
    (0, swagger_1.ApiOperation)({ summary: 'Get investigation analysis steps for an alert' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Investigation analysis steps' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], InvestigationsController.prototype, "findInvestigationSteps", null);
__decorate([
    (0, common_1.Get)(':alertId/analysis/:stepId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get specific investigation step' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Investigation step details' }),
    __param(0, (0, common_1.Param)('alertId')),
    __param(1, (0, common_1.Param)('stepId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], InvestigationsController.prototype, "findInvestigationStep", null);
exports.InvestigationsController = InvestigationsController = __decorate([
    (0, swagger_1.ApiTags)('alerts'),
    (0, common_1.Controller)('alerts'),
    __metadata("design:paramtypes", [investigations_service_1.InvestigationsService])
], InvestigationsController);
//# sourceMappingURL=investigations.controller.js.map