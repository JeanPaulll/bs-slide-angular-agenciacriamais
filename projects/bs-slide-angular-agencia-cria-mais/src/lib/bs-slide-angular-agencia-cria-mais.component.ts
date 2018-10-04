import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {SlideInterface} from './models/slide-interface';

declare const $: any;
declare const jQuery: any;
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
// window['$'] = $;
// window['jQuery'] = $;

@Component({
    selector: 'bs-slide-angular-agcm',
    template: `
        <!-- Set up your HTML -->
        <!--<div class="owl-carousel">-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
            <!--<div> Your Content </div>-->
        <!--</div>-->
   
        
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

        <!--<div *ngIf="!slideImages?.length">-->
            <!--<div class="alert alert-info custom-alerts fade in">-->
                <!--Não há slides cadastradas.-->
            <!--</div>-->
        <!--</div>-->

        <!--<hr>-->
        <!--<pre>-->
            <!--{{ slideImages | json}}-->
        <!--</pre>-->
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
        console.log('rrrrr', $);
    }

    // @HostBinding('class') defaultClass = 'owl-carousel';
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

    ngOnInit() {
        console.log('this.slideImages', this.slideImages);
        this.slideImages = this.__slideImages;
    }

    ngAfterViewInit(): void {
        debugger;
        // this.$owlElement = $(this.el.nativeElement);
        // this.$owlElement.owlCarousel(this.defaultOptions);

        // $(document).ready(function(){
        //     $(".owl-carousel").owlCarousel();
        // });

        // this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);

        console.log('owlCarousel',  this.$owlElement);

        $(document).ready(function () {
            (function ($) {
                console.log('leu tudo');
                const  tSlider = $('.top-features-slide');
                // tSlider.hide();
                debugger;
                if (tSlider.length) {
                    tSlider.owlCarousel({
                        loop: true,
                        nav: false,
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 4000,
                        smartSpeed: 1200,
                        autoplayHoverPause: true,
                        lazyLoad: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            500: {
                                items: 2
                            },
                            992: {
                                items: 3
                            },
                            1300: {
                                items: 4,
                                autoplay: false,
                            }
                        },
                    });
                    debugger;
                    console.log('tSlider', tSlider);
                }

            })(jQuery);
        });

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