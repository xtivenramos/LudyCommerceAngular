import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ContratsResponse } from 'src/app/models/contrato/contrato';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  public url:string = environment.apiURL;

  constructor(
    private http:HttpClient,
    // private response:HttpResponse<ContratsResponse>
  ) { }

  getContratos()
  {
    return this.http.get<ContratsResponse>(this.url + 'Aprovisionamiento/contratos')
  }
}
