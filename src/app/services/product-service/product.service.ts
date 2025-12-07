import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/v1/produto';

  constructor(private http: HttpClient, private router: Router) {}

  criarProduto(dto: any): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}/create`, dto);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  atualizarProduto(id: number, dto: any) {
    return this.http.put(
      `http://localhost:8080/v1/produto/atualizar/${id}`,
      dto
    );
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
