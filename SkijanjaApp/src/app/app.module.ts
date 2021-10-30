import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { TracksComponent } from './tabs/tracks/tracks.component';
import { SkipassComponent } from './tabs/skipass/skipass.component';
import { WeatherComponent } from './tabs/weather/weather.component';
import { DayWeatherComponent } from './tabs/weather/day-weather/day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    TabsComponent,
    InfoComponent,
    TracksComponent,
    SkipassComponent,
    WeatherComponent,
    DayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
