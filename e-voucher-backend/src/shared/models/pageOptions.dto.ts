import { Order, PAGE_tAKE } from "../../consts";

export class PageOptionsDto {
    readonly order: Order = Order.DESC;
    readonly page: number = 1;
    readonly take: number = PAGE_tAKE;
  
    get skip(): number {
      return (this.page - 1) * this.take;
    }
  }