import { IsString, Matches, MinLength } from "class-validator";
import { Match } from "src/decorators/match.decorator";
import {
  isStringErrorMessage,
  minLengthErrorMessage,
} from "src/global/error-messages";

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  email: string;
}

export class CreateUserDto {
  @IsString({ message: isStringErrorMessage("username") })
  @MinLength(8, {
    message: minLengthErrorMessage("username", 8),
  })
  username: string;

  @IsString({ message: isStringErrorMessage("email") })
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, { message: "Email is invalid" })
  email: string;

  @IsString({ message: isStringErrorMessage("password") })
  @MinLength(8, {
    message: minLengthErrorMessage("password", 8),
  })
  password: string;

  @IsString({ message: isStringErrorMessage("confirm password") })
  @Match("password")
  confirmPassword: string;
}
