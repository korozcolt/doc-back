import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { DepartmentsModule } from './departments/departments.module';
import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { getCacheConfig } from './config/cache.config';
import { getDatabaseConfig } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDatabaseConfig()),
    CacheModule.register(getCacheConfig()),
    RolesModule,
    UsersModule,
    AuthModule,
    CompaniesModule,
    CompaniesModule,
    DepartmentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
