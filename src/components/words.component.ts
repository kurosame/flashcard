import { Component } from '@angular/core'

@Component({
  selector: 'ngx-words-component',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent {
  title: Array<String> = ['Ecosystem', 'エコシステム']
  description: String = '\
    特定の言語やツールやライブラリをサポートする環境\n\
    例えばVue.jsでいうエコシステムの充実とはwebpackやESLintのVue.js用の設定が充実しているか、\n\
    ルーティング周りの使いやすいライブラリがあるかなど（vue-router）'
}
