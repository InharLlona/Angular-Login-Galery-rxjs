import { Injectable } from '@angular/core';
import { Mountain } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class GaleryServiceService {

  mountains: Mountain[]
  selectedMtn:Mountain
  prevMtn:Mountain
  nextMtn:Mountain
  actual:number
  prs:boolean
  uls:boolean

  constructor() { 
    this.mountains = [
      {
        id: 1,
        src:"../../../assets/mnt1.jpg",
        title:"mtn1"
      },{
        id: 2,
        src:"../../../assets/mnt2.jpg",
        title:"mtn2"
      },{
        id: 3,
        src:"../../../assets/mnt3.jpg",
        title:"mtn3"
      },{
        id: 4,
        src:"../../../assets/mnt4.jpg",
        title:"mtn4"
      },{
        id: 5,
        src:"../../../assets/mnt5.jpg",
        title:"mtn5"
      },{
        id: 6,
        src:"../../../assets/mnt6.jpg",
        title:"mtn6"
      },{
        id: 7,
        src:"../../../assets/mnt7.jpg",
        title:"mtn7"
      },{
        id: 8,
        src:"../../../assets/mnt8.jpg",
        title:"mtn8"
      }
    ]
    this.actual = 0
    this.selectedMtn = this.mountains [0]
    this.nextMtn = this.mountains [1]
    pr:true
    ul:false
  }

changeSelected(sel:string, auto:boolean){
switch (sel){
    case "+":{
      if(auto && this.actual == 7){
        this.actual = 0
        this.selectedMtn =  this.mountains [this.actual]
        this.nextMtn =  this.mountains [this.actual+1]
        this.calculatePosition()
      } else{
        this.calculatePosition()
        this.prevMtn =  this.mountains [this.actual]
        this.selectedMtn =  this.mountains [this.actual+1]
        this.nextMtn =  this.mountains [this.actual+2]
        this.actual += 1}
      break;}
    case "-":{
      if(this.prs!==true){
        this.prevMtn =  this.mountains [this.actual-2]
        this.selectedMtn =  this.mountains [this.actual-1]
        this.nextMtn =  this.mountains [this.actual]
        this.actual -= 1}
      break;}
    case "":{
      this.prevMtn = {
        id: 0,
        src: "",
        title:"",
      } ;
      this.selectedMtn =  this.mountains [0]
      this.nextMtn =  this.mountains [1]
      break;}
}
return [this.prevMtn,this.selectedMtn,this.nextMtn]
}

calculatePosition(){
  if(this.actual==0){
    this.prs=true
  }else{this.prs=false}
  if(this.actual==7 ){
    this.uls=true
  }else{this.uls=false}
  return [this.prs,this.uls]
}



}
