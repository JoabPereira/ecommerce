import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductTableComponent } from '../../shared/components/product-table/product-table.component';
import { ProductService } from '../../services/product-service/product.service';
import { Produto } from '../../models/produto.model';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProductTableComponent, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
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
    this.router.navigate(['/editar']);
  }

  deletarProduto(id: number) {
    this.productService.deletarProduto(id).subscribe({
      next: () => this.carregarProdutos(),
      error: (err) => console.error(err),
    });
  }

  adicionarCarrinho(id: number) {
    console.log('Carrinho', id);
  }
}
