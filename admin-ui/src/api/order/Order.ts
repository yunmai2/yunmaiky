import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderNo: string;
  product?: Product | null;
};
