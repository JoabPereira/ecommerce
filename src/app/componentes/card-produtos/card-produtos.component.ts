import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { Produto } from '../../models/produto.model';
export interface ProdutoCard {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  desconto: number;
}

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [NgFor, CurrencyPipe, CommonModule],
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.scss'],
})
export class CardProdutosComponent implements OnInit {
  produtoImg = 'imagens/camisa.jpg';
  imgHeight = 300;

  constructor(private productService: ProductService) {}

  produtct: ProdutoCard[] = [];

  ngOnInit(): void {
    this.productService.getProdutos().subscribe({
      next: (data: Produto[]) => {
        this.produtct = data.map((p) => ({
          id: p.id,
          nome: p.nome,
          preco: p.preco,
          descricao: p.descricao ?? '',
          estoque: p.estoque ?? 0,
          desconto: p.desconto ?? 0,
        }));
      },
      error: (err) => console.error('Erro ao carregar produtos', err),
    });
  }

  adicionarCarrinho(id: number) {
    console.log('Carrinho', id);
  }
}
