import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';

import { CreateCompanyDto } from '../dtos/create-company.dto';
import { Company } from '../entities/companies.entity';
import { CompaniesService } from '../services/companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @Req() req,
  ): Promise<Company> {
    const user = req.user.id; // Asumiendo que el ID de usuario está en req.user.id
    return this.companiesService.createCompany(createCompanyDto, user);
  }

  @Put(':id')
  async updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companiesService.updateCompany(id, updateCompanyDto);
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string): Promise<void> {
    return this.companiesService.deleteCompany(id);
  }

  @Get(':id')
  async findCompany(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findCompany(id);
  }

  @Get()
  async findCompanies(): Promise<Company[]> {
    return this.companiesService.findCompanies();
  }

  @Post(':companyId/users/:userId')
  async assignUserToCompany(
    @Param('companyId') companyId: string,
    @Param('userId') userId: number,
  ): Promise<Company> {
    return this.companiesService.assignUserToCompany(companyId, userId);
  }
}
