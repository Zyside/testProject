import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CustomValidatorService } from '../../services/custom-validator/custom-validator.service';
import { DialogData, HomeComponent } from '../home/home.component';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})


export class PopoverComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  public imagePath;
  imgURL: any;
  public message: string;
  mask = '+{0} (000) 000-0000';

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder, public snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    switch (this.data['type']) {
      case 'delete-user':
        this.dialogRef.close(this.data['type']);
        break;
      case 'add-user':
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.snackBar.open('Some input is invalid. Check please again.', 'Not finished',{
                duration: 2000
            });
            return;
        }
        const correctPhoneNumber = this.createValidPhoneNumber(this.registerForm.value.phone);
        console.log('correctPhoneNumber', correctPhoneNumber);
        this.registerForm.value.phone = correctPhoneNumber;
        this.registerForm.value._id = this.createId();
        this.registerForm.value.picture = this.imgURL;
        this.registerForm.value.tages = [];
        this.registerForm.value.registered = new Date();
        this.dialogRef.close(this.registerForm.value);
        console.log(this.registerForm.value);
        break;
      default:
        this.dialogRef.close();
    }
  }

  createId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 24; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  createValidPhoneNumber(str) {
    const string = str;
    const arrStr = [];
    for (let i = 0; i < 11; i++) {
      if (i === 0) {
        arrStr.push('+' + string[i]);
      } else if (i === 1) {
        arrStr.push(' ' + '(' + string[i]);
      } else if (i === 3) {
        arrStr.push(string[i] + ')' + ' ' );
      } else if (i === 6) {
        arrStr.push(string[i] + '-' );
      } else {
        arrStr.push(string[i]);
      }
    }
    return arrStr.join('');
  }

  get about() {
    return this.registerForm.get('about');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get balance() {
    return this.registerForm.get('balance');
  }

  get company() {
    return this.registerForm.get('company');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get eyeColor() {
    return this.registerForm.get('eyeColor');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get picture() {
    return this.registerForm.get('picture');
  }
  get gender() {
    return this.registerForm.get('gender');
  }



  preview(files) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    age: ['' , [Validators.required, CustomValidatorService.checkLimit(18, 99)]],
    about: ['' , Validators.required],
    address: ['' , Validators.required],
    balance: ['' , Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    phone: ['', [Validators.required, CustomValidatorService.phoneValidator]],
    picture: [''],
    gender: ['', Validators.required],
    eyeColor: ['', Validators.required]
  });
  }
}


