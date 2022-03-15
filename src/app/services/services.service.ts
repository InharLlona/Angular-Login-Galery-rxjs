import { Injectable } from '@angular/core';
import { MemberEntity } from 'src/app/model/model'; 
import { Router } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
nm:string;
lg:boolean;

constructor(private router: Router) { }

login(ob:MemberEntity) : Observable<boolean>{
if((ob.name=="master8@lemoncode.net") && (ob.password=="12345678")){
  this.nm = ob.name;
  return of(true)
}else{return of(false)}
}

navigater = () =>{
  this.router.navigate(['/galery']);
  this.lg = true;
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
