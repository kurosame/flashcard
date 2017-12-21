import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: '<h1>{{text}}</h1>'
})
export class WordsComponent {
  text: String = 'Hello world'
}
