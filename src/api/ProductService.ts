import httpService from "./HttpService";
import ApiConfig from "./ApiConfig";
import { IProduct, IProductForm } from "../types/Product.type";

export const getProductListApi = async () => {
  return await httpService.get<IProduct[]>(ApiConfig.product);
};

export const deleteProductApi = async (id: number) => {
  const url = `${ApiConfig.product}/${id}`;
  return await httpService.delete(url);
};

export const updateProductApi = async (id: number, data: IProductForm) => {
  const url = `${ApiConfig.product}/${id}`;
  return await httpService.put(url, data);
};
