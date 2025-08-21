import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/app/shared/models/Transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  public constructor(private _httpClient: HttpClient) {}

  private _baseURL: string = "http://localhost:3000/transferencias";

  public retornaTodasTransferencias(): Observable<Transferencia[]> {
    return this._httpClient.get<Transferencia[]>(
      this._baseURL,
    );
  }

  public adicionarNovaTransferencia(transferencia: Transferencia): Observable<Transferencia>{
    this.adicionarDataTransferencia(transferencia);

    return this._httpClient.post<Transferencia>(this._baseURL, transferencia);
  }

  private adicionarDataTransferencia(transferencia: any) {
    transferencia.data = new Date();
  }
}
