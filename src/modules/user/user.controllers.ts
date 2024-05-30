import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.services";
import { CreateUserDto } from "./user.dto";
import { ResponseData } from "src/global/global.class";
import { HttpStatus, HttpMessage } from "src/global/htttp.enum";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("register")
  createUser(@Body() userInfos: CreateUserDto): ResponseData<CreateUserDto> {
    try {
      return new ResponseData<CreateUserDto>(
        this.userService.createUser(userInfos),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<CreateUserDto>(
        this.userService.createUser(userInfos),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
