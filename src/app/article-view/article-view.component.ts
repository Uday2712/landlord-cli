import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {

$(document).ready(function(){
var textarea = $('.add_comment textarea').text();
$('.add_comment textarea').keyup(function() {
if($(this).val().length == 0)
{
$('.add_comment button').addClass('disabled_btn');
}
else
{
$('.add_comment button').removeClass('disabled_btn');
}
});
});

  }

}
