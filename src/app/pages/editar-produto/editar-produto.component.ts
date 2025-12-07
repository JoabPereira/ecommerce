import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service/product.service';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.scss',
})
export class EditarProdutoComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

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

  salvar() {
    this.productService.atualizarProduto(this.id, this.form.value).subscribe({
      next: () => {
        console.log('Produto atualizado com sucesso');
      },
      error: (err) => {
        console.error('Erro ao atualizar produto', err);
      },
    });
  }
}
