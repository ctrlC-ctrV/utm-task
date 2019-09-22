import { Component, Injectable, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})

@Injectable()
export class UserDialogComponent {

  form: FormGroup;
  description: string;
  userName: string;
  userControler: FormControl;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({
      userName: [this.userName, [Validators.required, Validators.minLength]],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.form.get('userName').hasError('required') ? 'You must enter a value' :
      this.form.get('userName').hasError('minlength') ? 'Name is too short' :
        '';
  }
}
