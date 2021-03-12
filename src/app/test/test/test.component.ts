import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    @Input() variavel: string;
    @Output() nomeCompleto: EventEmitter<string> = new EventEmitter(false);

    constructor() {
    }

    ngOnInit(): void {
        this.variavel = this.variavel + ' Alencar';
        this.nomeCompleto.emit(this.variavel);
    }

}
