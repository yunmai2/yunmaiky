import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestDateService } from "./testDate.service";
import { TestDateControllerBase } from "./base/testDate.controller.base";

@swagger.ApiTags("testDates")
@common.Controller("testDates")
export class TestDateController extends TestDateControllerBase {
  constructor(
    protected readonly service: TestDateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
