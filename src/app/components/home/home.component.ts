import { Component } from '@angular/core';
import { Sessao1Component } from "../sessao1/sessao1.component";
import { Sessao2Component } from "../sessao2/sessao2.component";
import { ProdutosComponent } from "../produtos/produtos.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [Sessao1Component, Sessao2Component, ProdutosComponent, BannerComponent]
})
export class HomeComponent {

}
