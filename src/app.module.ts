import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { env } from './env'
import { WordsComponent } from './components/words.component'

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [WordsComponent],
  bootstrap: [WordsComponent]
})
export class AppModule {}
