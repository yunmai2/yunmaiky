import { Module } from "@nestjs/common";
import { TestDateModuleBase } from "./base/testDate.module.base";
import { TestDateService } from "./testDate.service";
import { TestDateController } from "./testDate.controller";
import { TestDateResolver } from "./testDate.resolver";

@Module({
  imports: [TestDateModuleBase],
  controllers: [TestDateController],
  providers: [TestDateService, TestDateResolver],
  exports: [TestDateService],
})
export class TestDateModule {}
