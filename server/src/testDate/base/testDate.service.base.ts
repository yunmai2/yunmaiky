/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TestDate } from "@prisma/client";

export class TestDateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestDateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateFindManyArgs>
  ): Promise<number> {
    return this.prisma.testDate.count(args);
  }

  async findMany<T extends Prisma.TestDateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateFindManyArgs>
  ): Promise<TestDate[]> {
    return this.prisma.testDate.findMany(args);
  }
  async findOne<T extends Prisma.TestDateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateFindUniqueArgs>
  ): Promise<TestDate | null> {
    return this.prisma.testDate.findUnique(args);
  }
  async create<T extends Prisma.TestDateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateCreateArgs>
  ): Promise<TestDate> {
    return this.prisma.testDate.create<T>(args);
  }
  async update<T extends Prisma.TestDateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateUpdateArgs>
  ): Promise<TestDate> {
    return this.prisma.testDate.update<T>(args);
  }
  async delete<T extends Prisma.TestDateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDateDeleteArgs>
  ): Promise<TestDate> {
    return this.prisma.testDate.delete(args);
  }
}