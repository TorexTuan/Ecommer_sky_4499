import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.modules";

@Module({
  imports: [UserModule],
})
export default class Modules {}
