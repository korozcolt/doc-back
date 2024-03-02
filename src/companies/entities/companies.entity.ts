import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Department } from 'src/departments/entities/departments.entity';
import { User } from 'src/users/entities/users.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

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
