import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import {patientData} from '../config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dataToDisplay: any;
  displayColumns:any;
  selectedRow:any;
  constructor(private data:DataserviceService,private modalService: NgbModal){

  }

  ngOnInit(){
    this.dataToDisplay = patientData
    this.displayColumns = Object.keys(this.dataToDisplay[0])
  //   if(this.data.getData())
  //   this.dataToDisplay = this.data.getData()
  // console.log(this.data.getData())
    // this.data.getJsonData().subscribe(data=>{
    //   this.dataToDisplay = data;
    //   this.displayColumns = Object.keys(this.dataToDisplay[0])
    // })
  }
  openChildComponent(rowData: any) {
    // You can pass data to the child component using inputs
    const modalRef = this.modalService.open(UpdateModalComponent);
    modalRef.componentInstance.rowData = rowData; // Pass row data to child component
  }
  displayvalue(event:any){
    alert(event)
    console.log(event)
  }
}
