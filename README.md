# Bs Slide Angular
Slide Dinâmico - Angular 6x.

[![GitHub top language](https://img.shields.io/github/languages/top/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/JeanPaulll/bs-slide-angular-agenciacriamais)
[![npm](https://img.shields.io/npm/v/bs-slide-angular-agencia-cria-mais.svg)]()
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=agenciacriamais)](http://www.agenciacriamais.com.br)

> `bs-slide-agular` é um componente de slideshow leve para aplicativos Anguar 6x e totalmente configurável.

## Características
* Reprodução automática
* Botões de navegação

## Exemplo

* [demo](https://JeanPaulll.github.io/bs-slide-angular-agenciacriamais/)

![](https://raw.githubusercontent.com/JeanPaulll/bs-slide-angular-agenciacriamais/master/1.png)

### Instalação
OS X & Linux:
````
npm i bs-slide-angular-agencia-cria-mais --save
````
Windows:
````
npm i bs-slide-angular-agencia-cria-mais --save
````

### Dependências
````
npm i jquery --save
````
* `importe o jquery globalmente em seu app projeto;`
* `angular.json` 
`````sh
...,
"scripts": [
   ...,
  "node_modules/jquery/dist/jquery.min.js"
]         
`````

* `importe o BsSlideAngularAgenciaCriaMaisModule para o seu app.module;`
`````sh
@NgModule({
  imports: [
    ...,
    BsSlideAngularAgenciaCriaMaisModule
  ],
  ...
})
class YourModule { ... }
`````
* use ` <bs-slide-angular-agcm></bs-slide-angular-agcm>` em seus templates. 

```sh
<bs-slide-angular-agcm [slideImages]="slideImages" [options]="options"></bs-slide-angular-agcm>
````

## Configuração

### @Input

* `slideImages: any[]` - Uma matriz de objetos que contém o URL e as legendas da imagem.
* `options: {}` - Objeto com valores de configuração para os slides com o formato abaixo.

````
slideImages = [
    {
      image: '/assets/images/image3.jpeg', //caminho para a imagem
      title: 'Legenda' //legenda para imagem,
      url: '#'
    }
]
````
````
Exemplo: 
options = {
       dots: true,
       autoplay: true,
       autoplayTimeout: 4000,
       smartSpeed: 1200,
       autoplayHoverPause: true,
       lazyLoad: true,
       loop: true,
       nav: false,
       items: 4
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
               autoplay: true,
           }
       }
   }
````
### Documentação owCarousel2
[owCarousel2](https://owlcarousel2.github.io/OwlCarousel2/)

## Ajude a melhorar

Encontrou um bug ou um problema? [Open a new issue](https://github.com/JeanPaulll/bs-slide-angular-agenciacriamais/issues)  GitHub.


## Contribuindo para este projeto
[GitHub](https://github.com/JeanPaulll/bs-slide-angular-agenciacriamais)

## Autor

[@JeanPaul](https://twitter.com/jeanpaulWeb?lang=pt-br) – jeanpaulwebb@gmail.com.br

[![GitHub contributors](https://img.shields.io/github/contributors/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()

