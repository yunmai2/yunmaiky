import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  creatTime: new Date(),
  lastLoginTime: new Date(),
  trueName: "exampleTrueName",
  username: "exampleUsername",
  password: "examplePassword",
  oauthType: "exampleOauthType",
  openId: "exampleOpenId",
  sessionKey: "exampleSessionKey",
  unionId: "exampleUnionId",
  inviterId: "exampleInviterId",
  nickName: "exampleNickName",
  avatarUrl: "exampleAvatarUrl",
  birthday: new Date(),
  userIdCard: "exampleUserIdCard",
  country: "exampleCountry",
  province: "exampleProvince",
  city: "exampleCity",
  language: "exampleLanguage",
};
const CREATE_RESULT = {
  id: "exampleId",
  creatTime: new Date(),
  lastLoginTime: new Date(),
  trueName: "exampleTrueName",
  username: "exampleUsername",
  password: "examplePassword",
  oauthType: "exampleOauthType",
  openId: "exampleOpenId",
  sessionKey: "exampleSessionKey",
  unionId: "exampleUnionId",
  inviterId: "exampleInviterId",
  nickName: "exampleNickName",
  avatarUrl: "exampleAvatarUrl",
  birthday: new Date(),
  userIdCard: "exampleUserIdCard",
  country: "exampleCountry",
  province: "exampleProvince",
  city: "exampleCity",
  language: "exampleLanguage",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    creatTime: new Date(),
    lastLoginTime: new Date(),
    trueName: "exampleTrueName",
    username: "exampleUsername",
    password: "examplePassword",
    oauthType: "exampleOauthType",
    openId: "exampleOpenId",
    sessionKey: "exampleSessionKey",
    unionId: "exampleUnionId",
    inviterId: "exampleInviterId",
    nickName: "exampleNickName",
    avatarUrl: "exampleAvatarUrl",
    birthday: new Date(),
    userIdCard: "exampleUserIdCard",
    country: "exampleCountry",
    province: "exampleProvince",
    city: "exampleCity",
    language: "exampleLanguage",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  creatTime: new Date(),
  lastLoginTime: new Date(),
  trueName: "exampleTrueName",
  username: "exampleUsername",
  password: "examplePassword",
  oauthType: "exampleOauthType",
  openId: "exampleOpenId",
  sessionKey: "exampleSessionKey",
  unionId: "exampleUnionId",
  inviterId: "exampleInviterId",
  nickName: "exampleNickName",
  avatarUrl: "exampleAvatarUrl",
  birthday: new Date(),
  userIdCard: "exampleUserIdCard",
  country: "exampleCountry",
  province: "exampleProvince",
  city: "exampleCity",
  language: "exampleLanguage",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        creatTime: CREATE_RESULT.creatTime.toISOString(),
        lastLoginTime: CREATE_RESULT.lastLoginTime.toISOString(),
        birthday: CREATE_RESULT.birthday.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          creatTime: FIND_MANY_RESULT[0].creatTime.toISOString(),
          lastLoginTime: FIND_MANY_RESULT[0].lastLoginTime.toISOString(),
          birthday: FIND_MANY_RESULT[0].birthday.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        creatTime: FIND_ONE_RESULT.creatTime.toISOString(),
        lastLoginTime: FIND_ONE_RESULT.lastLoginTime.toISOString(),
        birthday: FIND_ONE_RESULT.birthday.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        creatTime: CREATE_RESULT.creatTime.toISOString(),
        lastLoginTime: CREATE_RESULT.lastLoginTime.toISOString(),
        birthday: CREATE_RESULT.birthday.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
