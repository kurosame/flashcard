import { Component, Inject } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'ngx-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {
  words: Observable<Array<any>>

  // Due to the Parcel error, not using syntax sugar
  constructor(@Inject(AngularFirestore) private db: AngularFirestore) {
    this.words = db.collection('words').valueChanges()
  }
}
