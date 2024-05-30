import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  password: string;

  @Column({ unique: true })
  confirmPassword: string;
}
