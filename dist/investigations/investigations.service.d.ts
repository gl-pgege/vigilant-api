export type Status = "New" | "On Investigation" | "Escalated" | "Completed - False Positive" | "Completed - Confirmed Fraud";
export type Priority = "High" | "Medium" | "Low";
export interface Alert {
    id: string;
    datetime: string;
    clientAccount: string;
    accountNumber: string;
    status: Status;
    priority: Priority;
}
export interface SourceDatum {
    system: string;
    data: Record<string, unknown> | string;
}
export interface RelationshipNode {
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: string;
    };
    type?: 'input' | 'output';
}
export interface RelationshipEdge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
}
export interface RelationshipGraph {
    nodes: RelationshipNode[];
    edges: RelationshipEdge[];
    narrative: string;
}
export interface InvestigationStep {
    id: string;
    when: string;
    title: string;
    reasoning: string;
    sources: SourceDatum[];
    relationshipGraph?: RelationshipGraph;
}
export declare class InvestigationsService {
    private alerts;
    findAllAlerts(): Alert[];
    findAlert(id: string): Alert | null;
    findInvestigationSteps(alertId: string): InvestigationStep[];
    findInvestigationStep(alertId: string, stepId: string): InvestigationStep | null;
}
