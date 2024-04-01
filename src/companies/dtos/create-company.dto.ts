import { IsJSON, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CompanySettings } from '../interfaces/companySetting.interface';

//dto create company
export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  logo?: string;

  @IsOptional()
  @ApiProperty()
  @IsJSON()
  settings?: CompanySettings;
}
