"use strict";
let titulo = "Entrevista con el CEO de Yuotube";
let vistas = 4500;
let temperatura = 36.6;
let publicado = true;
let valorNulo = null;
let usuario = null;
//... mpas adelante
usuario = "Alfonso";
let carrito = ["libro", "cuaderno"];
carrito = null; //se vacía automáticamente
let comentario = "¡Excelente explicación";
let likes = 220;
let esFavorito = true;
let resultado;
resultado = "ok";
resultado = 200;
let persona = {
    nombre: "Ana",
    fechaNacimiento: null
};
let data = "cargando datos...";
data = { titulo: "Nuevo video", autor: "DevSenior" };
data = [1, "hola", true];
let videosRecomendados = [
    "Tutorial TypeScript desde cero",
    "Detrás de cámara Dev Senior",
    "Top 5 de extensiones para Vs Code"
];
let numeros = [1, 2, 4, 5];
//Arrays de diferentes tipos
let datos = [
    2345,
    true,
    "Alejandra"
];
let video = {
    titulo: "Cómo ganar subscriptores",
    duracion: 10,
    autor: "DevSenior"
};
video.duracion = 20;
let miVideo = {
    titulo: "Domina TypeScript",
    duracion: 15,
    autor: "DevSenior",
    estadisticas: {
        likes: 300,
        vistas: 1200,
        comentarios: 89
    }
};
//Clases y POO 
class UsuarioYoutube {
    constructor(nombre, correo, canal) {
        this.nombre = nombre;
        this.correo = correo;
        this.canal = canal;
    }
    subirVideo(titulo) {
        console.log(`${this.nombre} ha subido un nuevo video: ${titulo}`);
    }
    comentar(video, comentario) {
        console.log(`${this.nombre} comentó en ${video}: ${comentario}`);
    }
}
const usuario1 = new UsuarioYoutube("DevSeniorCode", "dev@sessionStorage.com", "Code2025");
usuario1.subirVideo("Aprende TypeScript");
usuario1.comentar("Aprende TypeScript", "Gracias por subir este tipo d econtenido");
