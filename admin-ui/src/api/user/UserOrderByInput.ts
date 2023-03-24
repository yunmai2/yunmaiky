import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  lastLoginTime?: SortOrder;
  trueName?: SortOrder;
  creatTime?: SortOrder;
  gender?: SortOrder;
  openId?: SortOrder;
  sessionKey?: SortOrder;
  unionId?: SortOrder;
  inviterId?: SortOrder;
  birthday?: SortOrder;
  nickName?: SortOrder;
  userIdCard?: SortOrder;
  avatarUrl?: SortOrder;
  country?: SortOrder;
  province?: SortOrder;
  city?: SortOrder;
  language?: SortOrder;
  oauthType?: SortOrder;
};
