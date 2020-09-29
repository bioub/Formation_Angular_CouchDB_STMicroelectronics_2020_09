import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule, // (masque un export de CommonModule qui lui meme export ngIf DatePipe)
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
