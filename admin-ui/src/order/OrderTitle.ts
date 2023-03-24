import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderNo";

export const OrderTitle = (record: TOrder): string => {
  return record.orderNo || String(record.id);
};
