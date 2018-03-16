import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AddIngredienteCommand } from '../../commands/ingrediente/add-ingrediente-command';
import { IngredienteService } from '../../services/ingrediente/ingrediente.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UpdateIngredienteCommand } from '../../commands/ingrediente/update-ingrediente-command';

@Component({
  selector: 'app-ingrediente-form',
  templateUrl: './ingrediente-form.component.html',
  styleUrls: ['./ingrediente-form.component.css']
})
export class IngredienteFormComponent implements OnInit {

  formulario: FormGroup;
  id: number = 0;
  submit: boolean = false;
  inscricao: Subscription;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private ingredienteService: IngredienteService) { }

  ngOnInit() {
    this.criandoFormulario();

    this.inscricao = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        if (this.id != 0) {
          this.ingredienteService.getById(this.id)
            .subscribe(
              (ret: any) => {
                this.formulario.controls['nome'].setValue(ret.data.nome);
                this.formulario.controls['valor'].setValue(ret.data.valor);
              },
              err => {
                alert(err);
              }
            );
        }
      }
    )
  }

  criandoFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  aplicaCssErro(campo) {
    return {
      'alert alert-danger': !this.formulario.get(campo).valid && this.submit,
    }
  }

  salvar() {
    this.submit = true;
    if (this.formulario.valid) {

      if (this.id != 0) {

        let params: UpdateIngredienteCommand = {
          id : this.id,
          nome: this.formulario.value.nome,
          valor: this.formulario.value.valor
        }

        this.ingredienteService.update(params)
          .subscribe(
            (ret: any) => {
              alert('Novo ingrediente atualizado com sucesso.');
            },
            err => {
              alert(err);
            }
          );
      }
      else {
        let params: AddIngredienteCommand = {
          nome: this.formulario.value.nome,
          valor: this.formulario.value.valor
        }

        this.ingredienteService.create(params)
          .subscribe(
            (ret: any) => {
              alert('Novo ingrediente incluido com sucesso.');
            },
            err => {
              alert(err);
            }
          );
      }

    }
  }

}
