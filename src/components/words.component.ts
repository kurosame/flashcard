import { Component, Inject } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'ngx-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {
  words: Observable<Array<any>>

  // Due to the Parcel error, not using syntax sugar
  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) {
    this.words = db.list('words').valueChanges()
  }
}
