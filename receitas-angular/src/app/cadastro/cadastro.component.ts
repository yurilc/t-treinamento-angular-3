import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.form.value);
    this.authService.cadastrar(
      this.form.value.email,
      this.form.value.password
    ).then(
      result => {
        console.log('sucesso', result);
      }
    ).catch(
      error => {
        console.log('erro', error);
      }
    );
  }

  private initializeForm() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
}
