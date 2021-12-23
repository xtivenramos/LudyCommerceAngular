export interface Contrats {
  contid: number;
  clprid: number;
  clientec: string;
  tipoclie: string;
  tipocontrato: string;
  contnume: string;
  contcodi: string;
  pagodesbalance: string;
  contidtr: string;
  contvers: number;
  contobje: string;
  coordcom: string;
  frecucont: string;
  modac?: any;
  contfein?: any;
  contfefi?: any;
  contesta?: any;
}

export interface ContratsResponse {
  data: Contrats[];
  message: string;
  response: number;
  total_page: number;
  total_register: number;
  limit_register: number;
  _page: number;
  next_page: string;
  previous_page: string;
}
