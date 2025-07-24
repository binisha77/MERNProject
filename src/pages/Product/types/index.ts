import type { Status } from "../../../globals/types/type";

interface ICategory {
    id: string,
    categoryName: string
  }


 export interface IProduct{
  id: string,
  productName : string,
  productDescription:string,
  productPrice :number,
  productTotalStock :number,
  discount :number,
  productImageUrl :string,
  createdAt :string,
  updatedAt :string,
  categoryId :ICategory
  
}



export interface IProducts{
  products:IProduct[],
  status :Status
}