const libro1 = {
    nombre: "JDH parte1",
    color: "Rojo",
    autor: "Fred",
    numeroPaginas: 33,
    editorial: "Agostini",
    forrado: true,
    urlCover: "hola@gmail.com",
    comprar: function () {
        return `Libro de aventuras del autor  ${libro1.autor}  fue comprado `
    }
}
const libro2 = {
    nombre: "JDH parte2",
    color: "Amarillo",
    autor: "Pepe",
    numeroPaginas: 333,
    editorial: "Agostini",
    forrado: true,
    urlCover: "hola@gmail.com",
    comprar: function () {
        return `Libro de aventuras del autor  ${libro2.autor}  fue comprado `
    }
}
const libro3 = {
    nombre: "JDH parte3",
    color: "Azul",
    autor: "Julius",
    numeroPaginas: 333,
    editorial: "Agostini",
    forrado: false,
    urlCover: "hola@gmail.com",
    comprar: function () {
        return `Libro de aventuras del autor  ${libro3.autor}  fue comprado `
    }
}
const libro4 = {
    nombre: "JDH parte4",
    color: "Gris",
    autor: "Sam",
    numeroPaginas: 133,
    editorial: "Agostini",
    forrado: false,
    urlCover: "hola@gmail.com",
    comprar: function () {
        return `Libro de aventuras del autor  ${libro4.autor}  fue comprado `
    }
}

var biblioteca = [libro1, libro2, libro3]

const checkPages = () => (libro1.numeroPaginas > 150) ? true : false
const checkLibro = (biblioteca, libro) => {
    for (var i = 0; i <biblioteca.length; i++) {
        if (biblioteca[i] == libro1) {
            return true
        }
    }
    return false
};

/*Spread Operator*/
var biblioteca=[...biblioteca, libro4]
console.log(biblioteca)

/*Find Autor*/
const checkAutor =(autor, biblioteca) => biblioteca.find(autor === "Fred") 
/*console.log(checkAutor("Fred", biblioteca));  Hay algo mal*/

const forraLibro = (biblioteca) => { /*Esta mal*/
    for (var i = 0; i <biblioteca.length; i++) {
            biblioteca[i].forrado == true
    }
};





console.log("Libro en la biblioteca:  "+checkLibro(biblioteca, libro1));
console.log("Libro en la biblioteca:  "+checkLibro(biblioteca, libro4));
console.log("Tiene mas de 150 páginas:  "+checkPages());
console.log(libro1);
console.log(libro1.nombre);
console.log(libro1.forrado);
console.log(libro1.urlCover)
console.log(libro1.comprar); //devuelve el código
console.log(libro1.comprar()); //ejecuta la función
