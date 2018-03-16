import { Component, OnInit } from '@angular/core';

import { LancheDto } from './../dtos/lanche-dto';
import { LancheService } from '../services/lanche/lanche.service';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.component.html',
  styleUrls: ['./lanche.component.css']
})
export class LancheComponent implements OnInit {
 
  lanches: Array<LancheDto> = [];
  constructor(private lancheService: LancheService) { }

  async ngOnInit() {
   
    await this.lancheService.getAll().subscribe(
      (ret: any) => {                
        this.lanches = ret.data.objectList;
      },
      err => {
        alert(err);
      }    
    );
  }

}
