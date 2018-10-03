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
* use `<bs-slide-angular-agcm></bs-slide-angular-agcm>` em seus templates.

```sh
<bs-slide-angular-agcm [slideImages]="slides" [config]="config"></bs-slide-angular-agcm>
````

## Configuração

### @Input

* `slideImages: any[]` - Uma matriz de objetos que contém o URL e as legendas da imagem.
* `config: {}` - Objeto com valores de configuração para os slides com o formato abaixo.

````
slideImages = [
    {
      image: '/assets/images/image3.jpeg', //caminho para a imagem
      title: 'Legenda' //legenda para imagem
    }
]
````
````
config = {
        width:"800px", //width of slides defaults to 800px
        height:"300px" //height of slides defaults to 300px
        autoPlay:false //autoplay required or not defaults to false
        delay: 3000 // delay for autoplay
}
````

## Ajude a melhorar

Encontrou um bug ou um problema? [Open a new issue](https://github.com/JeanPaulll/bs-slide-angular-agenciacriamais/issues)  GitHub.


## Contribuindo para este projeto
[GitHub](https://github.com/JeanPaulll/bs-slide-angular-agenciacriamais)

## Autor

[@JeanPaul](https://twitter.com/jeanpaulWeb?lang=pt-br) – jeanpaulwebb@gmail.com.br

[![GitHub contributors](https://img.shields.io/github/contributors/JeanPaulll/bs-slide-angular-agenciacriamais.svg)]()

