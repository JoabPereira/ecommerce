import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto.model';
import { map } from 'rxjs/operators';

export interface CartItem {
  produto: Produto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private storageKey = 'carrinho';

  private carrinho: CartItem[] = [];

  private carrinhoSubject = new BehaviorSubject<CartItem[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.carregarCarrinho();
  }

  private carregarCarrinho() {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem(this.storageKey);
      this.carrinho = data ? JSON.parse(data) : [];
      this.carrinhoSubject.next(this.carrinho);
    }
  }

  private salvarCarrinho() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.carrinho));
      this.carrinhoSubject.next(this.carrinho);
    }
  }

  adicionar(produto: Produto) {
    if (produto.preco < 0) {
      console.error('Preço negativo não permitido');
      return;
    }

    const itemExistente = this.carrinho.find(
      (item) => item.produto.id === produto.id
    );

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.carrinho.push({ produto, quantidade: 1 });
    }

    this.salvarCarrinho();
  }

  remover(id: number) {
    this.carrinho = this.carrinho.filter((item) => item.produto.id !== id);
    this.salvarCarrinho();
  }

  limpar() {
    this.carrinho = [];
    this.salvarCarrinho();
  }

  getCarrinho() {
    return this.carrinho;
  }

  getQuantidadeTotal() {
    return this.carrinho$.pipe(
      map((itens) => itens.reduce((total, item) => total + item.quantidade, 0))
    );
  }
}
