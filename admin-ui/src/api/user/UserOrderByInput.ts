import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  creatTime?: SortOrder;
  lastLoginTime?: SortOrder;
  trueName?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  oauthType?: SortOrder;
  openId?: SortOrder;
  sessionKey?: SortOrder;
  unionId?: SortOrder;
  inviterId?: SortOrder;
  nickName?: SortOrder;
  avatarUrl?: SortOrder;
  gender?: SortOrder;
  birthday?: SortOrder;
  userIdCard?: SortOrder;
  country?: SortOrder;
  province?: SortOrder;
  city?: SortOrder;
  language?: SortOrder;
};
