import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InvestigationsService } from './investigations.service';
import type { Alert, InvestigationStep } from './investigations.service';

@ApiTags('alerts')
@Controller('alerts')
export class InvestigationsController {
  constructor(private readonly investigationsService: InvestigationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all alerts' })
  @ApiResponse({ status: 200, description: 'List of alerts' })
  findAllAlerts(): Alert[] {
    return this.investigationsService.findAllAlerts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get alert by ID' })
  @ApiResponse({ status: 200, description: 'Alert details' })
  findAlert(@Param('id') id: string): Alert | null {
    return this.investigationsService.findAlert(id);
  }

  @Get(':id/analysis')
  @ApiOperation({ summary: 'Get investigation analysis steps for an alert' })
  @ApiResponse({ status: 200, description: 'Investigation analysis steps' })
  findInvestigationSteps(@Param('id') alertId: string): InvestigationStep[] {
    return this.investigationsService.findInvestigationSteps(alertId);
  }

  @Get(':alertId/analysis/:stepId')
  @ApiOperation({ summary: 'Get specific investigation step' })
  @ApiResponse({ status: 200, description: 'Investigation step details' })
  findInvestigationStep(
    @Param('alertId') alertId: string,
    @Param('stepId') stepId: string
  ): InvestigationStep | null {
    return this.investigationsService.findInvestigationStep(alertId, stepId);
  }
}
