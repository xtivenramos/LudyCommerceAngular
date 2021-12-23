import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Contrats, ContratsResponse } from 'src/app/models/contrato/contrato';
import { Grid } from 'src/assets/dhx/suite';
import { TablesService } from '../service/tables.service';

@Component({
  selector: 'app-list',
  providers: [MessageService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // contrats:Contrats[] = []
  // virtualContrats!: Contrats[];
  // pagination:boolean = true
  // loading!: boolean;
  // selectedContrat:any

  // constructor(private service: TablesService, private messageService: MessageService) {  }

  // ngOnInit(): void {
    // this.getContratos()
    // this.loading = true;
    // this.virtualContrats = Array.from({length: 10000});
  // }

  // getContratos(): void
  // {
  //   this.loading = true;
  //   this.service.getContratos().subscribe((data:ContratsResponse) => {
  //     this.contrats = data.data
  //     this.loading = false;
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }


  title = 'Project3';

  @ViewChild('widget', {static: true}) container!: ElementRef;
  grid!: Grid;

  createTable(){

  }

  ngOnInit(){
    // this.createTable();
    this.grid = new Grid("tabla", {
      height: 600,

      columns: [
        { width: 340, id: 'name', header: [{ text: 'Name' }] },

        {
          width: 340,
          id: 'native',
          type: 'string',
          header: [{ text: 'Native name' }],
        },

        {
          width: 260,
          id: 'capital',
          type: 'string',
          header: [{ text: 'Capital' }],
        },

        {
          width: 260,
          id: 'currency',
          type: 'string',
          header: [{ text: 'Currency' }],
        },
      ],

      adjust: true,

      autoHeight:true,

      autoWidth:true,

      resizable: true,

      selection: 'row',

      multiselection: true,

      dragItem: "column",

    });
    this.grid.data.load('../assets/data.json');
  }

  ngOnDestroy(){
    this.grid && this.grid.destructor();
  }
}
