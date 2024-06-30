import { IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";
import { Match } from "src/decorators/match.decorator";
import {
  isInvalidErrorMessage,
  isNotEmptyErrorMessage,
  isStringErrorMessage,
  maxLengthErrorMessage,
} from "src/global/error-messages";

export class CreateUserDto {
  @IsNotEmpty({ message: isNotEmptyErrorMessage("username") })
  @IsString({ message: isStringErrorMessage("username") })
  @MaxLength(30, {
    message: maxLengthErrorMessage("username", 30),
  })
  username: string;

  @IsNotEmpty({ message: isNotEmptyErrorMessage("email") })
  @IsString({ message: isStringErrorMessage("email") })
  @MaxLength(255, {
    message: maxLengthErrorMessage("email", 255),
  })
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, {
    message: isInvalidErrorMessage("email"),
  })
  email: string;

  @IsNotEmpty({ message: isNotEmptyErrorMessage("password") })
  @IsString({ message: isStringErrorMessage("password") })
  @MaxLength(255, {
    message: maxLengthErrorMessage("password", 255),
  })
  password: string;

  @IsString({ message: isStringErrorMessage("confirm password") })
  @Match("password")
  confirmPassword: string;
}
