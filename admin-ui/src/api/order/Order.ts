import { Product } from "../product/Product";

export type Order = {
  orderNo: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  proId?: Product | null;
};
