import { Component, OnInit } from '@angular/core';
import { IngredienteService } from '../services/ingrediente/ingrediente.service';
import { IngredienteDto } from '../dtos/ingrediente-dto';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit {

  ingredientes: Array<IngredienteDto> = [];
  constructor(private ingredienteService: IngredienteService) { }

  async ngOnInit() {

    await this.ingredienteService.getAll().subscribe(
      (ret: any) => {
        this.ingredientes = ret.data.objectList;
      },
      err => {
        alert(err);
      }    );
  }

}
