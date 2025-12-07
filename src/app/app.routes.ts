import { Routes } from '@angular/router';
import { CardProdutosComponent } from '../../src/app/componentes/card-produtos/card-produtos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
  { path: '', component: CardProdutosComponent },
  { path: 'produtos', component: ProdutosComponent },
];
