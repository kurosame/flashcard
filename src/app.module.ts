import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponent }   from './components/sample.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SampleComponent ],
  bootstrap:    [ SampleComponent ]
})

export class AppModule { }