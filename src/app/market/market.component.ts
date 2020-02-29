import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoaderService} from '../service/loader.service';
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
  constructor(private formBuilder: FormBuilder, private router: Router, 
              private loader: LoaderService) { }

  addForm: FormGroup;
  submitted = false;
  uuidValue = UUID.UUID();

  ngOnInit() {
    this.getuserdatas = localStorage.getItem('currentuserdetails');
    if (this.getuserdatas) {
      this.loader.display(true);
      this.getname.push(JSON.parse(this.getuserdatas));
      console.log(this.getname);
      this.loader.display(false);
    } else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.loader.display(true);
    localStorage.removeItem('currentuserdetails');
    localStorage.clear();
    this.router.navigate(['login']);
    this.loader.display(false);

  }
  get f() { return this.addForm.controls; }

}
