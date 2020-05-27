import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).scroll(function(){

    
      let profileOffset = 600 // 650px;    
      let windowScroll = $(window).scrollTop(); //el user nzl add a;
      
      
      if(windowScroll > profileOffset - 30)
          {
              $("nav").css("backgroundColor","white");
              $("nav").css("box-shadow","5px 10px 18px #888888");            
  
             
          }
      else
          {
              $("nav").css("backgroundColor","transparent");
              
              
          }
  })
    
  }

}
