import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsercerdService } from '../service/usercerd.service';
import { LoaderService } from '../service/loader.service';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-logons',
  templateUrl: './logons.component.html',
  styleUrls: ['./logons.component.scss']
})
export class LogonsComponent implements OnInit {
  getemail: any;
  showLoader: boolean;

  constructor(private loader: LoaderService,
              private userservice: UsercerdService, private titleService: Title, private formBuilder: FormBuilder,
              private router: Router) { }
  addForm: FormGroup;
  submitted = false;
  alldatas: any;
  uuidValue = UUID.UUID();

  ngOnInit() {
    this.titleService.setTitle('create-account | user-login');
    this.addForm = this.formBuilder.group({
      id: [this.uuidValue],
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  createUser() {
    this.submitted = true;
    this.loader.display(true);
    this.userservice.createuser(this.addForm.value)
      .subscribe(data => {
        localStorage.setItem('userdatas', JSON.stringify(data));
        this.loader.display(false);
      });
  }
}
