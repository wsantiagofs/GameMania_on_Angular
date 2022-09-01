import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  clickCadastro(){
    alert('Cadastro concluído!')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
