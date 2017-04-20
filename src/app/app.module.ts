import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { ArticleViewComponent } from './article-view/article-view.component';


const routes: Routes = [
    //{ path: '',component:HomeComponent},
    { path: 'Header',component:HeaderComponent},
    { path: 'Footer',component:FooterComponent},
    { path: '',component:BlogComponent},
    { path: 'BlogCategory',component:BlogCategoryComponent},
    { path: 'ArticleView',component:ArticleViewComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    BlogCategoryComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }) 
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
