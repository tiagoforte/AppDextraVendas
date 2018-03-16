import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { LancheService } from './../../services/lanche/lanche.service';
import { IngredienteService } from '../../services/ingrediente/ingrediente.service';
import { IngredienteDto } from '../../dtos/ingrediente-dto';
import { ItensPedidoCommand } from './../../commands/pedido/itens-pedido-command';
import { PedidoCommand } from './../../commands/pedido/pedido-command';
import { PedidoDto } from '../../dtos/pedido-dto';

@Component({
  selector: 'app-lanche-form',
  templateUrl: './lanche-form.component.html',
  styleUrls: ['./lanche-form.component.css']
})
export class LancheFormComponent implements OnInit {

  formulario: FormGroup;
  id: number = 0;
  submit: boolean = false;
  inscricao: Subscription;
  ingredientes: Array<IngredienteDto> = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private lancheService: LancheService,
    private ingredienteService: IngredienteService
  ) { }

  async ngOnInit() {
    this.criandoFormulario();

    this.inscricao = this.route.params.subscribe(
      params => {

        this.id = params['id'];
        if (this.id != 0) {
          this.lancheService.getById(this.id)
            .subscribe(
              (ret: any) => {
                this.formulario.controls['nome'].setValue(ret.data.nome);
                this.formulario.controls['valor'].setValue(ret.data.valor);

                this.ingredienteService.getAll().subscribe(
                  (ingredientes: any) => {
                    this.ingredientes = ingredientes.data.objectList;
                  },
                );

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
      drp0: ['', Validators.required],
      drp1: ['', Validators.required],
      drp2: ['', Validators.required],
      drp3: ['', Validators.required],
      drp4: ['', Validators.required],
      drp5: ['', Validators.required],
    })
  }

  aplicaCssErro(campo) {
    return {
      'alert alert-danger': !this.formulario.get(campo).valid && this.submit,
    }
  }

  salvar() {   
    this.submit = true;


    let paramsItensPedido: Array<ItensPedidoCommand> = [];
    for (let i = 0; i < 6; i++) {

      let newItem: ItensPedidoCommand = {
        idIngrediente: i + 1,
        quantidade: this.formulario.get('drp' + i).value
      }
      paramsItensPedido.push(newItem)
    }

    let params: PedidoCommand = {
      idLanche: this.id,
      itensPedido: paramsItensPedido.filter(x => x.quantidade != 0)
    }

    this.lancheService.calcular(params).subscribe(
      (ret: PedidoDto) => {
        
        alert('Valor Final do Lanche R$ ' + ret.data.valorFinal);
      },
      err => {
        alert(err);
      });

  }


}
