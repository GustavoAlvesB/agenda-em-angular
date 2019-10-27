import { CrudService } from './../servicos/crud.service';
import { CadastroContato } from './../model/cadastroContato';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  formContato : FormGroup;
  contato: CadastroContato;
  CrudService: CrudService;

  constructor( private formBuilder: FormBuilder,
     private activeRouter: ActivatedRoute,
     private router:Router ) { }

  ngOnInit() {
    let id = Number(this.activeRouter.snapshot.paramMap.get('id')) || 0;
  
    if(id == 0) {
      this.contato = {id: null, numero: null, nome: '', email: ''}
    } else {
      //this.alunoService.getAluno(id).toPromise().then( async data => this.aluno = await data );
      this.contato = {id: null, numero: null, nome: '', email: ''}
      console.log(id)
    }
    
    this.formContato = this.formBuilder.group({
      nome: [
        this.contato.nome, // parametro responsável pelo valor(conteúdo do campo), caso adicione um valor será exibido no input
        [
          Validators.required, // validação de campo requerido
          Validators.minLength(4), // validação de valor minimo de caracteres
          Validators.maxLength(150), // validação de valor maximo de caracteres
          Validators.pattern(/^[a-zA-Z]+$/) // validação de tipo de caracteres (somente aceita letras minusculas e maiusculas)
        ]
      ],
      senha: [
        this.contato.numero, 
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(9),
          Validators.pattern(/^[0-9]+$/) // validação de tipo de caracteres (somente aceita números)
        ]
      ],
      email: [
        this.contato.email, 
        [
          Validators.required,
          Validators.email // validação de email
        ]
      ]
    });
  }

  adcCliente() {
    // resgatando os valores do campo e fazendo um cast(conversão) para o modelo(template) Aluno
    const novoCliente = this.formContato.getRawValue() as CadastroContato;

    this.CrudService.addContato(novoCliente)
      .subscribe(
        () => {
          this.formContato.reset(); // limpa os campos do formulário
        },
        error => {
          console.log(error);
          this.formContato.reset(); // limpa os campos do formulário
        }
      )
  }
}
