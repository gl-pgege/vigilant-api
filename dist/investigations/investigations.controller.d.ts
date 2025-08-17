import { InvestigationsService } from './investigations.service';
import type { Alert, InvestigationStep } from './investigations.service';
export declare class InvestigationsController {
    private readonly investigationsService;
    constructor(investigationsService: InvestigationsService);
    findAllAlerts(): Alert[];
    findAlert(id: string): Alert | null;
    findInvestigationSteps(alertId: string): InvestigationStep[];
    findInvestigationStep(alertId: string, stepId: string): InvestigationStep | null;
}
