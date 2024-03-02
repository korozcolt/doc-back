import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Company } from 'src/companies/entities/companies.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAd: Date;

  //companies: hasMany departments
  @OneToMany(() => Company, (company) => company.department)
  companies: Company[];
}
