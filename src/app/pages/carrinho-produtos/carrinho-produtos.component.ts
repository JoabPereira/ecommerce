import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CartItem,
  CartServiceService,
} from '../../services/cart-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrinho-produtos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './carrinho-produtos.component.html',
  styleUrl: './carrinho-produtos.component.scss',
})
export class CarrinhoProdutosComponent implements OnInit {
  carrinho$!: Observable<CartItem[]>;

  constructor(private cartServiceService: CartServiceService) {}

  ngOnInit() {
    this.carrinho$ = this.cartServiceService.carrinho$;
  }

  remover(id: number) {
    this.cartServiceService.remover(id);
  }

  limpar() {
    this.cartServiceService.limpar();
  }

  calcularTotal(itens: CartItem[]): number {
    return itens.reduce(
      (acc, item) => acc + item.produto.preco * item.quantidade,
      0
    );
  }
}
