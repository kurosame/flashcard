import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { WordsComponent } from './components/words.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [WordsComponent],
  bootstrap: [WordsComponent]
})
export class AppModule {}
