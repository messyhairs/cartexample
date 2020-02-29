import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsercerdService} from '../service/usercerd.service';
import {LoaderService} from '../service/loader.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getalluserdatas: any = [];
  alldatas: any;
  error: string;
  passworderror: string;
  addForm: FormGroup;
  submitted = false;
  uuidValue = UUID.UUID();
public getemail: any;
public getpass: any;
getalldatas: any;
  ipaddress: any;
  longitude: any;
  latitude: any;
  currency: any;
  currencysymbol: any;
  city: any;
  country: any;
  isp: any;

  constructor(private loader: LoaderService,
              private formBuilder: FormBuilder, private userService: UsercerdService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.userService.getusers().subscribe(res => {
  this.alldatas = res;
  // this.alldatas.forEach(element => {
  //   this.getalldatas
  //   localStorage.setItem('alldatas' , element);
  // });
});

}

  login() {
    if ((this.addForm.value.email) && (this.addForm.value.password)) {
      this.loader.display(true);
      this.alldatas.forEach(element => {
        this.getemail = element.email;
        this.getpass = element.password;
        if ((this.addForm.value.email === this.getemail) && (this.addForm.value.password === this.getpass)) {
          localStorage.setItem('currentuserdetails' , JSON.stringify(element));
          this.loader.display(false);
          this.router.navigate(['market']);
        }
        if (this.addForm.value.email !== this.getemail) {
          this.error = 'please enter correct email';
        }
        if (this.addForm.value.password !== this.getpass) {
          this.passworderror = 'plese check password';
        }
      });
    }
  }
}
