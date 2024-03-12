import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  // myForm!: FormGroup;
  addresses:any;
  myForm = this.fb.group({
     name: [null],
    items: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,

  ) {

  }
  addItem() {
    //debugger;
    // const addresses = this.myForm.controls.items as FormArray;
    // addresses.push("");

    this.addresses = this.myForm.controls.items as FormArray;
    console.log('this.addresses?????',this.myForm.controls.items);
    this.addresses.push(this.createAddressGroup());
  }

  onRemoveAddress(index: number): void {
    const addresses = this.myForm.controls.items as FormArray;
    addresses.removeAt(index);
  }

  onSubmit(): void {
    console.log("Form values", this.myForm.value);
    console.log("FormGroup", this.myForm);
  }

  private resetAddresses(): void {
    const addresses = this.myForm.controls.items as FormArray;

    while (addresses.length) {
      addresses.removeAt(addresses.length - 1);
    }

    addresses.push(this.createAddressGroup());
  }

  private createAddressGroup(): FormGroup {
    return this.fb.group({
      username: ["", Validators.required],
      email:    ["", Validators.required],
    });
  }

  onResetForm(): void {
    this.myForm.reset({
      // name: "",

    });
    this.resetAddresses();
  }

  get f() {
    return this.myForm.controls;
  }
}
