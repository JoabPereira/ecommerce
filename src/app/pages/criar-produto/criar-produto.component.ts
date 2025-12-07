import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product-service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.scss',
})
export class CriarProdutoComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      descricao: [''],
      preco: [''],
      desconto: [''],
      codigodeBarra: [''],
      imagem: [''],
      estoque: [''],
      categoria_id: [''],
    });
  }

  criar() {
    if (this.form.invalid) return;

    this.productService.criarProduto(this.form.value).subscribe({
      next: () => {
        console.log('Produto criado com sucesso');
      },
      error: (err) => console.error('Erro ao criar produto', err),
    });
  }
}
