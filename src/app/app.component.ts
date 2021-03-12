import { HttpClient } from '@angular/common/http';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public title = 'angular-test';
    public nome: string = 'Rafael';
    public volta: string;

    constructor(private http: HttpClient) {
        
    }

    ngOnInit(): void {

    }

    tratarNome(valor: string) {
        this.volta = valor;
    }
}

