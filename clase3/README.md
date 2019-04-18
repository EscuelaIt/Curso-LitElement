# Clase 3 de estilos

Curso de LitElement de EscuelaIT: https://escuela.it/cursos/curso-web-components-litelement

Vamos a mejorar un poco nuestro proyecto de clase, instalando los polyfills.

```
npm init
npm install @webcomponents/webcomponentsjs
npm install lit-element
```

Con esto, aparte de instalar LitElement como dependencia estamos instalando los polyfill de los Web Components.

Tendremos que agregar este script en el index.html

```
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script> 
```

