import { Module } from "@nestjs/common";
import { UserController } from "./user.controllers";
import { UserService } from "./user.services";
import { TypeOrmModule } from "@nestjs/typeorm";
import UserEntity from "src/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
