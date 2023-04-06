import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestDateServiceBase } from "./base/testDate.service.base";

@Injectable()
export class TestDateService extends TestDateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
