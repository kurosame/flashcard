import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { env } from './env'
import { WordsComponent } from './components/words.component'

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [WordsComponent],
  bootstrap: [WordsComponent]
})
export class AppModule {}
