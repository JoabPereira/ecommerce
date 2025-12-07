import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { Card1MainComponent } from './componentes/card1-main/card1-main.component';
import { CardProdutosComponent } from './componentes/card-produtos/card-produtos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Card1MainComponent,
    CardProdutosComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public router: Router) {}
}
