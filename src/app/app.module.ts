import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EnrollComponent } from './enroll/enroll.component';
import { HeaderComponent } from './header/header.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { FooterComponent } from './footer/footer.component';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    EnrollComponent,
    HeaderComponent,
    ShowDetailsComponent,
    AboutComponent,
    ContactComponent,
    WildcardComponent,
    FooterComponent,
    // FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
