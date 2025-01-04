import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-update-modal',
  standalone: false,
  
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.scss'
})
export class UpdateModalComponent {
   @Input() rowData: any; 
  @Output() updateDatainParent:EventEmitter<any> = new EventEmitter();
 
  UpdateForm!: FormGroup<any> ;
  constructor(private fb: FormBuilder,private datavar:DataserviceService,public modalService: NgbModal){

  }
  ngOnInit(): void {
    // Initialize the form with validation rules
    this.UpdateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      middleName:['',''],
      phonenumber:['',[Validators.required, Validators.maxLength(15)]]
    })
    
   this.UpdateForm.patchValue({'firstName':this.rowData.first_name})
   this.UpdateForm.patchValue({'middleName':this.rowData.middle_name})
   this.UpdateForm.patchValue({'lastName':this.rowData.last_name})
   this.UpdateForm.patchValue({'phonenumber':this.rowData.phone_number})
    //.get('firstName')?.value 
    //setValue(['firstName',this.rowData.first_name]) 
    //    set('firstName')
   
  }

  onSubmit(){
   console.log(this.UpdateForm.value)
   //this.close.emit(true)
   this.updateDatainParent.emit(this.UpdateForm.value)
   this.datavar.userData = this.UpdateForm.value
   //($('#myModal')as any).modal('hide')
   document.getElementById('myModal')?.setAttribute('style', 'display: none');
   
  }
}
