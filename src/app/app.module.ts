import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RockComponent } from './rock/rock.component';
import { MedlyComponent } from './medly/medly.component';
import { PopMusicComponent } from './pop-music/pop-music.component';
import { HipHopComponent } from './hip-hop/hip-hop.component';
import { HeaveMetalComponent } from './heave-metal/heave-metal.component';
import { ReggaeComponent } from './reggae/reggae.component';
import { RappingComponent } from './rapping/rapping.component';
import { BluesComponent } from './blues/blues.component';
import { JazzComponent } from './jazz/jazz.component';
import { FunkComponent } from './funk/funk.component';

@NgModule({
  declarations: [
    AppComponent,

    RockComponent,
      MedlyComponent,
      PopMusicComponent,
      HipHopComponent,
      HeaveMetalComponent,
      ReggaeComponent,
      RappingComponent,
      BluesComponent,
      JazzComponent,
      FunkComponent   // Ensure this is listed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
