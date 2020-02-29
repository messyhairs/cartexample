import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  getuserdatas: any;
  getname: any = [];
  name: any;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;
  submitted = false;
  uuidValue = UUID.UUID();

  ngOnInit() {
    this.getuserdatas = localStorage.getItem('currentuserdetails');
    if (this.getuserdatas) {
      this.getname.push(JSON.parse(this.getuserdatas));
      console.log(this.getname);
    } else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    localStorage.removeItem('currentuserdetails');
    localStorage.clear();
    this.router.navigate(['login']);

  }
  get f() { return this.addForm.controls; }

}
