import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
   
   $('#portfolio_li').on('click',function(){
    $('#M_M_div').hide().fadeOut();
    $('#M_L_div').hide().fadeOut();
    $('#M_P_div').delay(500).fadeIn();
   });

   $('#letting_li').on('click',function(){
    $('#M_L_div').delay(500).fadeIn();
    $('#M_M_div').hide().fadeOut();
    $('#M_P_div').hide().fadeOut();
   });
   
   $('#management_li').on('click',function(){
    $('#M_L_div').hide().fadeOut();
    $('#M_M_div').delay(500).fadeIn();
    $('#M_P_div').hide().fadeOut();
   });

var slider1 = $('.maximise_slider_div').height();
//alert(slider1);
$('.maximise_slider_full_div').css("height",slider1+"px");
  }

}
