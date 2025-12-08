import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartServiceService } from '../../services/cart-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  quantidade$!: Observable<number>;

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.quantidade$ = this.cartService.getQuantidadeTotal();
  }
}
