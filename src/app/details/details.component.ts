import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  // styleUrls: ['./details.component.css']
  styles: [`
    .whiteText{
      color: white;
    }
  `]
})
export class DetailsComponent implements OnInit {

  // detail:String="";
  // detailStatus:String="";
  detailsShow=false;
  detailsArray=[];
  constructor() { }

  ngOnInit() {
  }
  toggleDetails()
  {
    // this.detailStatus=this.detail;
    this.detailsShow=!this.detailsShow;
    this.detailsArray.push(this.detailsArray.length + 1);
    // this.detailsArray.push(new Date());
  }
}

