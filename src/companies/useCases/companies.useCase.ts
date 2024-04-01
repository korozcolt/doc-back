import { CreateCompanyDto } from '../dtos/create-company.dto';
import { Injectable } from '@nestjs/common';
import { Company } from '../entities/companies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { UpdateCompanyDto } from '../dtos/update-company.dto';

@Injectable()
export class CompaniesUseCase {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //create company useCase method
  async createCompany(
    createCompanyDto: CreateCompanyDto,
    user: number,
  ): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    company.user = await this.userRepository.findOne({ where: { id: user } });
    return this.companyRepository.save(company);
  }

  //update company useCase method
  async updateCompany(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    await this.companyRepository.update(id, updateCompanyDto);
    return this.companyRepository.findOne({ where: { id } });
  }

  //delete company useCase method
  async deleteCompany(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  //get company useCase method
  async findCompany(id: string): Promise<Company> {
    return this.companyRepository.findOne({ where: { id } });
  }

  //get all companies useCase method
  async findCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  //assign user to company useCase method
  async assignUserToCompany(
    companyId: string,
    userId: number,
  ): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: { id: companyId },
    });
    const user = await this.userRepository.findOne({ where: { id: userId } });
    company.user = user;
    return this.companyRepository.save(company);
  }
}
