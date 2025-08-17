"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestigationsService = void 0;
const common_1 = require("@nestjs/common");
const investigation_data_1 = require("./investigation-data");
let InvestigationsService = class InvestigationsService {
    alerts = [
        {
            id: "654321",
            datetime: "April 22, 2024, 9:00 AM",
            clientAccount: "Bella's Bistro",
            accountNumber: "XXX-XXXX-234",
            status: "On Investigation",
            priority: "Medium",
        },
        {
            id: "321098",
            datetime: "April 22, 2024, 4:30 PM",
            clientAccount: "Alex Chen",
            accountNumber: "XXX-XXXX-321",
            status: "Escalated",
            priority: "High",
        },
        {
            id: "123456",
            datetime: "April 22, 2024, 10:00 AM",
            clientAccount: "John Doe",
            accountNumber: "XXX-XXXX-789",
            status: "Completed - Confirmed Fraud",
            priority: "High",
        },
    ];
    findAllAlerts() {
        return this.alerts;
    }
    findAlert(id) {
        return this.alerts.find(alert => alert.id === id) || null;
    }
    findInvestigationSteps(alertId) {
        return investigation_data_1.stepsByAlert[alertId] || [];
    }
    findInvestigationStep(alertId, stepId) {
        const steps = investigation_data_1.stepsByAlert[alertId] || [];
        return steps.find(step => step.id === stepId) || null;
    }
};
exports.InvestigationsService = InvestigationsService;
exports.InvestigationsService = InvestigationsService = __decorate([
    (0, common_1.Injectable)()
], InvestigationsService);
//# sourceMappingURL=investigations.service.js.map