import { Component, OnInit } from '@angular/core';
import { Mountain } from 'src/app/model/model';
import { GaleryServiceService  } from 'src/app/services/galery-service.service'
import SetInterval from 'set-interval'

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.sass']
})
export class GaleryPageComponent implements OnInit {

  mountains: Mountain[]
  selectedMtn:Mountain
  prevMtn:Mountain
  nextMtn:Mountain

  pId:string

  pr:boolean
  ul:boolean
  bigPic:boolean
  autoPlay:boolean
  interval:boolean

  constructor(public galeryService:GaleryServiceService ) { 
    this.pr=true
    this.ul=false
    this.bigPic=false
    this.autoPlay=false
    this.interval=false
    this.pId="smallImg"
  }

  onAuto(){
    this.autoPlay = !this.autoPlay
    let timer;
    if(this.autoPlay){
      timer = SetInterval.start(() => this.onChangeImage("+"),2000)}
    else{
      SetInterval.clear(timer)
      timer = false
    }
  }

  onChangeImage (sele:string) {
  
   [this.prevMtn,this.selectedMtn,this.nextMtn] = this.galeryService.changeSelected(sele,this.autoPlay)
    this.onChangePosition ()
  }

  onChangePosition (){
    [this.pr,this.ul] = this.galeryService.calculatePosition()
  }

  zooming(){
    this.bigPic=!this.bigPic
    if(this.bigPic){this.pId="bigImg"}
    else{this.pId="smallImg"}
  }

  ngOnInit(): void {
  [this.prevMtn,this.selectedMtn,this.nextMtn] = this.galeryService.changeSelected("",false)
  }

}
