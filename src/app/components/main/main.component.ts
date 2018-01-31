import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.initForm();
  }
  myDataPickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  data: any;
  favoriteGender: string;
  genders: [string] = ['Boy', 'Girl'];
  selectedAge;
  ages = [10, 20, 30, 40];

  initForm() {
    this.mainForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, [Validators.required]],
      age: [ null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  submitForm(formData) {
    console.log(formData);
  }

  ngOnInit() {

  }

}
