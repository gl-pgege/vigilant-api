import { Injectable } from '@nestjs/common';
import { stepsByAlert } from './investigation-data';

export type Status = 
  | "New"
  | "On Investigation"
  | "Escalated"
  | "Completed - False Positive"
  | "Completed - Confirmed Fraud";

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
  position: { x: number; y: number };
  data: { label: string };
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

@Injectable()
export class InvestigationsService {
  private alerts: Alert[] = [
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

  // Alert methods
  findAllAlerts(): Alert[] {
    return this.alerts;
  }

  findAlert(id: string): Alert | null {
    return this.alerts.find(alert => alert.id === id) || null;
  }

  // Investigation steps methods
  findInvestigationSteps(alertId: string): InvestigationStep[] {
    return stepsByAlert[alertId] || [];
  }

  findInvestigationStep(alertId: string, stepId: string): InvestigationStep | null {
    const steps = stepsByAlert[alertId] || [];
    return steps.find(step => step.id === stepId) || null;
  }
}
