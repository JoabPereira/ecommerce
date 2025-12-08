import { Routes } from '@angular/router';
import { CardProdutosComponent } from '../../src/app/componentes/card-produtos/card-produtos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';
import { CriarProdutoComponent } from './pages/criar-produto/criar-produto.component';
import { CarrinhoProdutosComponent } from './pages/carrinho-produtos/carrinho-produtos.component';

export const routes: Routes = [
  { path: '', component: CardProdutosComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'editar/:id', component: EditarProdutoComponent },
  { path: 'criar', component: CriarProdutoComponent },
  { path: 'carrinho', component: CarrinhoProdutosComponent },
];
