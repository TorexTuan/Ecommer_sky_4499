import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import UserEntity from "src/entities/user.entity";
import * as bcrypt from "bcrypt";
import { ResponseData } from "src/global/global.class";
import { HttpMessage } from "src/global/htttp.enum";

interface ErrorMessage {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async registerUser(
    requestedUser: CreateUserDto,
  ): Promise<ResponseData<CreateUserDto>> {
    const users: UserEntity[] = await this.usersRepository.find();

    const hasExistedField = (propertyName: string): boolean => {
      return users.some((user: UserEntity) => {
        return _.isEqual(user[propertyName], requestedUser[propertyName]);
      });
    };

    const errorMessage: ErrorMessage = {};
    // Check username already existed
    if (hasExistedField("username")) {
      errorMessage.username = "The username already exists";
      throw new HttpException(errorMessage, HttpStatus.CONFLICT);
    }

    // Check email already existed
    if (hasExistedField("email")) {
      errorMessage.email = "The email already exists";
      throw new HttpException(errorMessage, HttpStatus.CONFLICT);
    }

    const hasExistedPassword = users.some(async (user: UserEntity) => {
      return await bcrypt.compare(user.password, requestedUser.password);
    });

    if (hasExistedPassword) {
      errorMessage.password = "The password already exists";
      throw new HttpException(errorMessage, HttpStatus.CONFLICT);
    }

    const newUser = this.usersRepository.create(requestedUser);
    await this.usersRepository.save(newUser);

    return new ResponseData<CreateUserDto>(
      requestedUser,
      HttpStatus.CREATED,
      HttpMessage.SUCCESS,
    );
  }
}
