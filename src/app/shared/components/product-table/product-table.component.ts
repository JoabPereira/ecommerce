import { CommonModule } from '@angular/common';
import { Component, Input, output, OnInit } from '@angular/core';
import { EventEmitter } from 'stream';
import { Produto } from '../../../models/produto.model';

export interface Produtos {
  id: number;
  nome: string;
  preco: number;
  codigoBarras: string;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  @Input() produtos: Produto[] = [];

  editar = output<number>();
  deletar = output<number>();
  adicionarCarrinho = output<number>();

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

  onAdicionarCarrinho(id: number) {
    this.adicionarCarrinho.emit(id);
  }
}
