import httpService from "./HttpService";
import ApiConfig from "./ApiConfig";
import { IProduct } from "../types/Product.type";

export const getProductListApi = async () => {
  return await httpService.get<IProduct[]>(ApiConfig.product);
};
