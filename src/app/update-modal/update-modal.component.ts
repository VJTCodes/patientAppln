import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, NgModel, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataserviceService } from "../service/dataservice.service";

@Component({
  selector: "app-update-modal",
  standalone: false,

  templateUrl: "./update-modal.component.html",
  styleUrl: "./update-modal.component.scss",
})
export class UpdateModalComponent {
  @Input() show: boolean = true;
  @Input() rowData: any; // Row to be edited
  @Output() closePopup = new EventEmitter<void>(); // Emit close event
  @Output() updateDatainParent = new EventEmitter();

  options: any = ["recovered", "positive", "negative"];

  UpdateForm!: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private datavar: DataserviceService,
    public modalService: NgbModal
  ) {}
  ngOnInit(): void {
    // Initialize the form with validation rules

    this.UpdateForm = this.fb.group({
      RegNo: ["", ""],
      first_name: ["", [Validators.required, Validators.minLength(2)]],
      last_name: ["", [Validators.required, Validators.minLength(1)]],
      middle_name: ["", ""],
      phone_number: ["", [Validators.required,  Validators.pattern('^[0-9]{10}$')]],
      status: [""],
    });

    this.UpdateForm.patchValue({ RegNo: this.rowData.id });
    this.UpdateForm.patchValue({ first_name: this.rowData.first_name });
    this.UpdateForm.patchValue({ middle_name: this.rowData.middle_name });
    this.UpdateForm.patchValue({ last_name: this.rowData.last_name });
    this.UpdateForm.patchValue({ phone_number: this.rowData.phone_number });
    this.UpdateForm.patchValue({ status: this.rowData.status });
  }
  submitData(): void {
    if (this.rowData) {
      this.datavar.setData(this.UpdateForm.value);
      this.updateDatainParent.emit(this.rowData); // Emit updated row data
    }
  }
  close(){
    this.modalService.dismissAll()
  }
}
