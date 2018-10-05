import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SlideInterface} from './models/slide-interface';

declare const $: any;
declare const jQuery: any;
import 'owl.carousel';
// window['$'] = $;
// window['jQuery'] = $;

@Component({
    selector: 'bs-slide-angular-agcm',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="item" *ngFor="let item of slideImages; index as i">
            <div class="main-content" [style.background]="item?.image">
                <img [src]="item?.image" [alt]="item?.title">
                <h4><a [href]="item?.url">{{ item?.title }}</a></h4>
                <!--<p>{{ item?.descricao }}</p>-->
            </div>
        </div>
        <div class="no-slides" *ngIf="!slideImages?.length">
            <div class="alert alert-info custom-alerts fade in">
                Não há slides cadastradas.
            </div>
        </div>
    `,
    styleUrls: [
        '../../node_modules/owl.carousel/dist/assets/owl.carousel.css',
        '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css',
        './bs-slide-angular-agencia-cria-mais.css',
    ]
})
export class BsSlideAngularAgenciaCriaMaisComponent implements OnInit, AfterViewInit, OnDestroy {

    private _slideImages: SlideInterface[];
    get slideImages(): SlideInterface[] {
        return this._slideImages;
    }

    @Input('slideImages') set slideImages(value: SlideInterface[]) {
        this._slideImages = value;
    }

    @HostBinding('class') defaultClass = 'owl-carousel owl-theme bs-slide-angular-agcm';
    @Input() options: object;
    $owlElement: any;

    __slideImages = [
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

    constructor(private el: ElementRef) {
        this.options = {
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
            autoplayHoverPause: true,
            lazyLoad: true,
            loop: true,
            nav: false,
            items: 4
            // responsive: {
            //     0: {
            //         items: 1
            //     },
            //     500: {
            //         items: 2
            //     },
            //     992: {
            //         items: 3
            //     },
            //     1300: {
            //         items: 4,
            //         autoplay: true,
            //     }
            // }
        };
    }

    ngOnInit() {
        // this.slideImages = this.__slideImages;
    }

    ngAfterViewInit(): void {
        this.$owlElement = $(this.el.nativeElement);
        console.log('this.options', this.options);
        if (this.$owlElement.length) { this.$owlElement.owlCarousel(this.options); }
    }

    ngOnDestroy() {
        this.$owlElement.owlCarousel('destroy');
        this.$owlElement = null;
    }
}
