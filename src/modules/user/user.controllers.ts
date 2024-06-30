import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.services";
import { CreateUserDto } from "./user.dto";
import { ResponseData } from "src/global/global.class";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("register")
  async registerUser(
    @Body() userInfos: CreateUserDto,
  ): Promise<ResponseData<CreateUserDto>> {
    return await this.userService.registerUser(userInfos);
  }
}
