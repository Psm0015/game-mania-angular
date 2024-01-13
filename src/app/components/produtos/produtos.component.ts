import { Component, Input } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../Models/Produto';
import { CommonModule } from '@angular/common';
import { error } from 'console';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  @Input() inicio!:number
  @Input() fim!:number
  produtos!:Produto[]

  constructor(private pService: ProdutosService){
    
  }

  ngOnInit(){
    this.buscarProdutos()

  }

  buscarProdutos(){
    this.pService.getProdutos().subscribe(p => this.produtos = p.slice(this.inicio, this.fim))
    console.log(this.produtos)
  }
  
}
