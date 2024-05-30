import { Injectable } from "@nestjs/common";
import { UserDto, CreateUserDto } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import UserEntity from "src/entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserDto[]> {
    const allUsers = await this.usersRepository.find();
    return allUsers.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
    }));
  }

  createUser(user: CreateUserDto): CreateUserDto {
    const newUser = this.usersRepository.create(user);
    this.usersRepository.save(newUser);
    return user;
  }
}
