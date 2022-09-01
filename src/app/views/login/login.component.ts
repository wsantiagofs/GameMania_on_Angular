import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
    userModel = new User();

    mensagem = ""

    receberDados() {
      console.log(this.userModel)

      const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"];

      listaPalavras.forEach(palavra => {
        if(this.userModel.email?.toLowerCase().includes(palavra)) {
          this.mensagem = "Dados inválidos"

          return;
        }
      });

      this.loginService.login(this.userModel).subscribe( (response) => {
          console.log("Login feito com sucesso")
          localStorage.setItem("nomeUsuario", response.body.user.nome)
          this.router.navigateByUrl("/")

      }, (msgErro) => {
        console.log("Email ou senha incorretos")
        this.mensagem = msgErro.error
        // alert("Email ou senha incorretos")
      })
    }
}