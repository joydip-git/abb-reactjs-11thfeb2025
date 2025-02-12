import Axios, { AxiosResponse } from "axios";
import { PRODUCT_API_URL } from "../config/constants";
import { Product } from "../models/product";

export const getProducts = (): Promise<AxiosResponse<Product[]>> => {
    return Axios.get<Product[]>(PRODUCT_API_URL)
}

export const getProduct = (id: string): Promise<AxiosResponse<Product>> => {
    // return Axios.get(PRODUCT_API_URL + "/" + id)
    return Axios.get<Product>(`${PRODUCT_API_URL}/${id}`)
}

export const deleteProduct = (id: string): Promise<AxiosResponse<Product>> => {
    return Axios.delete<Product>(`${PRODUCT_API_URL}/${id}`)
}
//export default { getProduct, getProducts }