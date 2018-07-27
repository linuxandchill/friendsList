import {RouterModule, Routes} from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'; 

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {DataService} from './services/data.service';
import { BsPanelComponent } from './components/bs-panel/bs-panel.component'
import { ProductComponent} from './components/product/product.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PostsComponent } from './components/posts/posts.component'


const appRoutes: Routes = [
  {path: '', component:UserComponent},
  {path: 'products', component:ProductComponent}, 
]; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BsPanelComponent,
    ProductComponent,
    ContactFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
