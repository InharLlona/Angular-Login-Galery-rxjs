import { Injectable } from '@angular/core';
import { MemberEntity } from 'src/app/model/model'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
nm:string;
lg:boolean;
  constructor(private router: Router) { }

login(ob:MemberEntity){
if((ob.name=="master8@lemoncode.net") && (ob.password=="12345678")){
  this.router.navigate(['/dashboard'])
  this.nm = ob.name;
  this.lg = true;
}
}

logout(){
  this.router.navigate(['/home']);
  this.lg = false;
}

isLogged(){
  return this.lg
}

getUsername(){
return this.nm;
}
  
}
