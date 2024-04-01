import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CompanySettings } from '../interfaces/companySetting.interface';
import { Department } from 'src/departments/entities/departments.entity';
import { User } from 'src/users/entities/users.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  logo: string;

  @Column({ type: 'json' })
  settings: CompanySettings;

  //departments: belongsTo company
  @ManyToOne(() => Department, (department) => department.companies)
  department: Department;

  //company OneToOne with user
  @OneToOne(() => User, (user) => user.company)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAd: Date;
}
