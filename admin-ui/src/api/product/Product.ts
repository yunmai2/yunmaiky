import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productname: string;
  price: number | null;
  orders?: Array<Order>;
};
