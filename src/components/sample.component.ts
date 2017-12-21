import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{text}}</h1>'
})

export class SampleComponent implements OnInit {
    text: String = 'Hello world';

    constructor() {

    }

    ngOnInit() {
        console.log('Sample component initialised');
    }
}