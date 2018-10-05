import {Component} from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {
    title = 'bs-slide-angular-agenciacriamais';
    public slideImages = [
        {
            image: 'https://picsum.photos/100',
            title: 'Legenda 1',
            url: '#'
        },
        {
            image: 'https://picsum.photos/101',
            title: 'Legenda 2',
            url: '#'
        },
        {
            image: 'https://picsum.photos/102',
            title: 'Legenda 3',
            url: '#'
        },
        {
            image: 'https://picsum.photos/103',
            title: 'Legenda 4',
            url: '#'
        },
        {
            image: 'https://picsum.photos/103',
            title: 'Legenda 5',
            url: '#'
        }
    ];
}
