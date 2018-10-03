import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SlideInterface} from "./models/slide-interface";

import * as jQuery from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
// import owlCarousel from 'owl.carousel'


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
export class BsSlideAngularAgenciaCriaMaisComponent implements OnInit, AfterViewInit {

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
    get slideImages(): SlideInterface[] {
        return this._slideImages;
    }

    @Input('slideImages') set slideImages(value: SlideInterface[]) {
        console.log("slideImages", value);
        this._slideImages = value;
    }


    constructor() {
    }

    ngOnInit() {
        console.log('jQuery', jQuery);
        console.log('this.slideImages', this.slideImages);
        this.slideImages = this.__slideImages;
    }

    ngAfterViewInit(): void {

        (function ($) {
            const  tSlider = $(".top-features-slide");
            if(tSlider.length) {
                tSlider.owlCarousel({
                    loop:true,
                    nav:false,
                    dots:false,
                    autoplay:true,
                    autoplayTimeout:4000,
                    smartSpeed:1200,
                    autoplayHoverPause:true,
                    lazyLoad:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        500:{
                            items:2
                        },
                        992:{
                            items:3
                        },
                        1300:{
                            items:4,
                            autoplay:false,
                        }
                    },
                })
            }
        })(jQuery);

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


}
