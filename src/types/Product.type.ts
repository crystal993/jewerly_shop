export interface IProduct {
  id: number;
  brand_name: string;
  product_name: string;
  product_price: string;
  product_img: string;
}

export enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
}

export interface IProductState {
  list: IProduct[];
  listStatus: ApiStatus;
  createProductFormStatus: ApiStatus;
  updateProductFormStatus: ApiStatus;
}

export interface IProductForm {
  brand_name: string;
  product_name: string;
  product_price: string;
  product_img: string;
}

export interface IUpdateProductActionProps {
  id: number;
  data: IProductForm;
}
