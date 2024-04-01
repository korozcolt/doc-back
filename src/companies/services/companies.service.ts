import { CompaniesUseCase } from '../useCases/companies.useCase';
import { Company } from '../entities/companies.entity';
import { CreateCompanyDto } from '../dtos/create-company.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  constructor(private companyUseCase: CompaniesUseCase) {}

  async createCompany(
    createCompanyDto: CreateCompanyDto,
    user: number,
  ): Promise<Company> {
    return await this.companyUseCase.createCompany(createCompanyDto, user);
  }

  async updateCompany(
    id: string,
    updateCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return await this.companyUseCase.updateCompany(id, updateCompanyDto);
  }

  async deleteCompany(id: string): Promise<void> {
    return await this.companyUseCase.deleteCompany(id);
  }

  async findCompany(id: string): Promise<Company> {
    return await this.companyUseCase.findCompany(id);
  }

  async findCompanies(): Promise<Company[]> {
    return await this.companyUseCase.findCompanies();
  }

  async assignUserToCompany(
    companyId: string,
    userId: number,
  ): Promise<Company> {
    return await this.companyUseCase.assignUserToCompany(companyId, userId);
  }
}
