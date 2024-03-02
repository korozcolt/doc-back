import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
