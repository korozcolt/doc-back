import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches('^(\\+57)?[1-9]{1}[0-9]{9}$', '', {
    message: 'Invalid phone number. It must be a valid Colombian phone number.',
  })
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$ %^&*-]).{8,}$/, {
    message: 'password too weak',
  })
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  isActive: boolean;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  updatedAd?: Date;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  lastLogin?: Date;

  @IsNotEmpty()
  @ApiProperty()
  role: string; // Assuming role is represented by its name
}
