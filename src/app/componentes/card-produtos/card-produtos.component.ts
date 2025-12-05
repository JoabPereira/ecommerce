import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.scss'],
})
export class CardProdutosComponent implements OnInit {
  produtoImg = 'imagens/camisa.jpg';
  imgHeight = 300;

  constructor(private productService: ProductService) {}

  products: any[] = [];

  ngOnInit(): void {
    this.productService.getProdutos().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Erro ao carregar produtos', err),
    });
  }
}
