import { CommonModule } from '@angular/common';
import { Component, Input, output, OnInit } from '@angular/core';
import { Produto } from '../../../models/produto.model';
import { RouterModule } from '@angular/router';

export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  codigoBarras: string;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  @Input() produtos: Produto[] = [];

  editar = output<number>();
  deletar = output<number>();
  adicionarCarrinho = output<Produto>();

  formatarPreco(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  onEditar(id: number) {
    this.editar.emit(id);
  }

  onDeletar(id: number) {
    this.deletar.emit(id);
  }

  onAdicionarCarrinho(produto: Produto) {
    this.adicionarCarrinho.emit(produto);
  }
}
