import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export default class UserEntity {
  // Primary key of User Entity
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // Each username must be unique and the maximum lenth of username: 30
  @Column({ unique: true, type: "varchar", length: 30, nullable: false })
  username: string;

  // Each email must be unique and the maximum lenth of email: 255
  @Column({ unique: true, type: "varchar", length: 255, nullable: false })
  email: string;

  // Each password must be unique and the maximum lenth of password: 255
  @Column({ unique: true, type: "varchar", length: 255, nullable: false })
  password: string;

  /**
   * @description - Hash password before inserting to database
   */
  @BeforeInsert()
  async hashPassword() {
    // Hash password by bcrypt with 2^10 iterations of its hashing algorithm
    this.password = await bcrypt.hash(this.password, 10);
  }
}
