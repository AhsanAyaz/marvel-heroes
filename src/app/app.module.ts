import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SharedModule
  ],
  providers: [{
    provide: 'MARVEL_API_PUBKEY',
    useValue: environment.marvelPubKey  // you can fetch this from env variables too
  }, {
    provide: 'MARVEL_API_HASH',
    useValue: environment.marvelPubHash
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
