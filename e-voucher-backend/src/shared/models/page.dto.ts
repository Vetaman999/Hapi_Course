import { PageMetaDto } from "./pageMeta.dto";

export class Page<T>{
    readonly data: T[];
    readonly meta: PageMetaDto;
  
    constructor(data: T[], meta: PageMetaDto) {
      this.data = data;
      this.meta = meta;
    }
}