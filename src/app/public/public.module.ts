import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SntbplusComponent } from './pages/sntbplus/sntbplus.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PropertiesComponent } from './pages/properties/properties.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    ProduitsComponent,
    PortfolioComponent,
    SntbplusComponent,
    TeamsComponent,
    ReservationComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
