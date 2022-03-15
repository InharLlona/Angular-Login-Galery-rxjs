import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { MemberEntity } from 'src/app/model/model';
import { ServicesService } from 'src/app/services/services.service'
import { Observable, Observer, of } from 'rxjs'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})

export class LoginPageComponent implements OnInit {

  member:MemberEntity;
  l = localStorage;
  loading: boolean

  constructor(public servicesService:ServicesService) {
    this.member = {
    name:'',
    password:'',
  }
  this.loading = false;
}

storage(val:string) {
  this.l.setItem("usr", val);
}

onClickSubmit = (member:MemberEntity) => {
  this.loading = true
  this.servicesService.login(member).pipe(delay(2000)).subscribe({next: () => {
    this.servicesService.navigater()
    this.loading = false
  }})
}

ngOnInit(): void {
  this.member.name = this.l.getItem("usr");
}

}
