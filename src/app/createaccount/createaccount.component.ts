import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsercerdService} from '../service/usercerd.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UsercerdService, private router: Router) { }

  addForm: FormGroup;
  submitted = false;
  uuidValue = UUID.UUID();

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [this.uuidValue],
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });

  }
  createUser() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    } else if (localStorage.getItem('userdatas')) {
    }
    this.userService.createuser(this.addForm.value)
      .subscribe( data => {
        localStorage.setItem('userdatas' , JSON.stringify(data));
        this.router.navigate(['login']);
      });
  }
  get f() { return this.addForm.controls; }

}

