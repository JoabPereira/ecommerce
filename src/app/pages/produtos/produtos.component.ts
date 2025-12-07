import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductTableComponent } from '../../shared/components/product-table/product-table.component';
import { ProductService } from '../../services/product-service/product.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProductTableComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados.map((item) => ({
          id: item.id,
          nome: item.nome,
          preco: item.preco,
          codigoBarras: item.codigoBarras,
        }));
      },
      error: (err) => console.error('Erro ao carregar produtos', err),
    });
  }

  editarProduto(id: number) {
    console.log('Editar', id);
  }

  deletarProduto(id: number) {
    console.log('Deletar', id);
  }

  adicionarCarrinho(id: number) {
    console.log('Carrinho', id);
  }
}
