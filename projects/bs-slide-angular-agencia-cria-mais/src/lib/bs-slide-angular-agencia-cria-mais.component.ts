import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {SlideInterface} from './models/slide-interface';
// import exec from 'script-loader!../../../node_modules/jquery/dist/jquery.min.js';

// import * as jQuery from 'jquery';
// window['jQuery'] = jQuery;
// declare var $: any;
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';


// const webpack = require('webpack');
// new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
//     "window.jQuery": "jquery"
// })

// import * as jQuery from 'jquery';
// // import 'imports?jQuery=jquery!owl.carousel';

// import 'imports-loader!jquery';
// import 'imports-loader!owl.carousel';

// declare var $: any;

// import * as $ from 'jquery';

// import 'imports-loader?jQuery=jquery!owl.carousel';
// import exec from 'script-loader!../../../node_modules/jquery/dist/jquery.min.js';


// window['$'] = $;
// window['jQuery'] = $;
// import '../../node_modules/jquery/dist/jquery.js';

// import * as $ from 'jquery';
// // import 'imports-loader?jQuery=jquery!owl.carousel';
// // import * as $ from 'jquery/dist/jquery.min.js';
//
//
// declare const $: any;
// import 'owl.carousel';
// declare const owlCarousel: any;


// You add it here


import 'jquery';
// import 'owl.carousel';
declare const $: any; 

// interface JQuery {
//     owlCarousel(): JQuery;
// }
// import 'owl.carousel';
// require('style!redactor/redactor.css');
// import 'imports?jQuery=jquery!owl.carousel';
// import 'imports?jQuery=jquery!owl.carousel';

// import * as $ from 'jquery';
// import $ from 'jquery';
// import * as $ from "jquery";

// import * as $ from 'jquery';

// import * as $ from 'jquery';
// import 'imports?jQuery=jquery!owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import * as owlCarousel from 'owl.carousel';
// import owlCarousel from 'owl.carousel'
// declare module "jquery" {
//     export {$ as default};
// }

@Component({
    selector: 'bs-slide-angular-agcm',
    template: `
        <div class="top-feature section-spacing" *ngIf="slideImages?.length">
            <div class="top-features-slide">
                <div class="item" *ngFor="let item of slideImages; index as i">
                    <div class="main-content" [style.background]="item?.image">
                        <img [src]="item?.image" [alt]="item?.title">
                        <h4><a [href]="item?.url">{{ item?.title }}</a></h4>
                        <!--<p>{{ item?.descricao }}</p>-->
                    </div>
                </div>
            </div>
        </div>

        <div *ngIf="!slideImages?.length">
            <div class="alert alert-info custom-alerts fade in">
                Não há slides cadastradas.
            </div>
        </div>

        <hr>
        <pre>
            {{ slideImages | json}}
        </pre>
    `,
    styles: []
})
export class BsSlideAngularAgenciaCriaMaisComponent implements OnInit, AfterViewInit, OnDestroy {
    get slideImages(): SlideInterface[] {
        return this._slideImages;
    }

    @Input('slideImages') set slideImages(value: SlideInterface[]) {
        console.log('slideImages', value);
        this._slideImages = value;
    }


    constructor(private el: ElementRef) {
    }

    @HostBinding('class') defaultClass = 'owl-carousel';
    @Input() options: object;

    $owlElement: any;
    defaultOptions: any = {};

    __slideImages = [
        {
            image: 'https://picsum.photos/200',
            title: 'Legenda 1',
            url: '#'
        },
        {
            image: 'https://picsum.photos/201',
            title: 'Legenda 2',
            url: '#'
        }
    ];

    private _slideImages: SlideInterface[];
    calendarElement: any;

    ngOnInit() {
        // console.log('jQuery', jQuery);
        console.log('this.slideImages', this.slideImages);

        this.slideImages = this.__slideImages;
    }
    // calendarElement: JQuery;


    ngAfterViewInit(): void {
        debugger;
        // this.calendarElement = $(this.elementRef.nativeElement);
        // this.calendarElement.owlCarousel({});

        this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);

        console.log('owlCarousel',  this.$owlElement);


        // jQuery(document).ready(function () {
        //     (function ($) {
        //         console.log('leu tudo');
        //         const  tSlider = $('.top-features-slide');
        //         // tSlider.hide();
        //         if (tSlider.length) {
        //             tSlider.owlCarousel({
        //                 loop: true,
        //                 nav: false,
        //                 dots: false,
        //                 autoplay: true,
        //                 autoplayTimeout: 4000,
        //                 smartSpeed: 1200,
        //                 autoplayHoverPause: true,
        //                 lazyLoad: true,
        //                 responsive: {
        //                     0: {
        //                         items: 1
        //                     },
        //                     500: {
        //                         items: 2
        //                     },
        //                     992: {
        //                         items: 3
        //                     },
        //                     1300: {
        //                         items: 4,
        //                         autoplay: false,
        //                     }
        //                 },
        //             });
        //         }
        //
        //     })(jQuery);
        // });

            // const  tSlider = $('.top-features-slide');
            // tSlider.hide();
            // if (tSlider.length) {
            //     tSlider.owlCarousel({
            //         loop: true,
            //         nav: false,
            //         dots: false,
            //         autoplay: true,
            //         autoplayTimeout: 4000,
            //         smartSpeed: 1200,
            //         autoplayHoverPause: true,
            //         lazyLoad: true,
            //         responsive: {
            //             0: {
            //                 items: 1
            //             },
            //             500: {
            //                 items: 2
            //             },
            //             992: {
            //                 items: 3
            //             },
            //             1300: {
            //                 items: 4,
            //                 autoplay: false,
            //             }
            //         },
            //     });
            // }
        // (function ($) {  })(jQuery);

        // const  tSlider = jQuery(".top-features-slide");
        // if(tSlider.length) {
        //     tSlider.owlCarousel({
        //         loop:true,
        //         nav:false,
        //         dots:false,
        //         autoplay:true,
        //         autoplayTimeout:4000,
        //         smartSpeed:1200,
        //         autoplayHoverPause:true,
        //         lazyLoad:true,
        //         responsive:{
        //             0:{
        //                 items:1
        //             },
        //             500:{
        //                 items:2
        //             },
        //             992:{
        //                 items:3
        //             },
        //             1300:{
        //                 items:4,
        //                 autoplay:false,
        //             }
        //         },
        //     })
        // }
    }

    ngOnDestroy() {
        this.$owlElement.owlCarousel('destroy');
        this.$owlElement = null;
    }

}
