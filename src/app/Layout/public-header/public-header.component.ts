import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service'

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.sass']
})
export class PublicHeaderComponent implements OnInit {

  constructor(public servicesService:ServicesService) { }
 
isLogged(){
  return this.servicesService.isLogged();
}

getName(){
  return this.servicesService.getUsername();
}

onClickLogout() {
  this.servicesService.logout()
}

ngOnInit(): void {

}

}
