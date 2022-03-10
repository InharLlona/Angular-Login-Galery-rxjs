import { Component, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/model/model';
import { ServicesService } from 'src/app/services/services.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})

export class LoginPageComponent implements OnInit {
  member:MemberEntity;
  l = localStorage;
  constructor(public servicesService:ServicesService) {
    this.member = {
    name:'',
    password:'',
  }
}

storage(val:string) {
  this.l.setItem("usr", val);
}

onClickSubmit(member:MemberEntity) {
  this.servicesService.login(member)
}

  ngOnInit(): void {
    this.member.name = this.l.getItem("usr");
  }

}
