import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { patientData } from '../config';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-patient-list',
  standalone: false,
  
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {
  dataToDisplay: any;
  displayColumns:any;
  selectedRow:any;
  isPopupOpen: boolean = false;
  constructor(private data:DataserviceService,private modalService: NgbModal){

  }

  ngOnInit(){
    this.dataToDisplay = patientData
    this.displayColumns = Object.keys(this.dataToDisplay[0])
    this.data.data$.subscribe(ele => {
      // Process the received data
      const index = this.dataToDisplay.findIndex((row: { id: any; }) => row.id === ele.RegNo);
      if (index !== -1) {
        ele.id =  ele.RegNo
        this.dataToDisplay[index] = { ...ele };
      }
      else{//Add new record

      }
      this.closePopup();
     
    });
   
  }
  openChildComponent(row: any) {
    // You can pass data to the child component using inputs
    this.selectedRow = row;
    const modalRef = this.modalService.open(UpdateModalComponent);
    modalRef.componentInstance.rowData = row; // Pass row data to child component
   
  }
  closePopup(): void {
    this.isPopupOpen = false;
    this.modalService.dismissAll()
  }
  displayvalue(updatedRow:any){
    const index = this.selectedRow.findIndex((row: { id: any; }) => row.id === updatedRow.id);
    if (index !== -1) {
      this.selectedRow[index] = { ...updatedRow };
    }
  
    console.log(updatedRow)
    this.closePopup(); // Close the popup after updating
  }
}



