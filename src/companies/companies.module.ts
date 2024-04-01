import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';
import { CompaniesUseCase } from './useCases/companies.useCase';
import { Company } from './entities/companies.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Company])],
  providers: [CompaniesService, CompaniesUseCase],
  controllers: [CompaniesController],
  exports: [CompaniesService],
})
export class CompaniesModule {}
