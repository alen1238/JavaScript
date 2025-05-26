    let titulo: string = "Entrevista con el CEO de Yuotube";
    let vistas: number = 4500;
    let temperatura: number = 36.6;
    let publicado: boolean = true;

    let valorNulo: null = null;
    let usuario: string | null = null;
    //... mpas adelante
    usuario = "Alfonso";
    let carrito: string[] | null = ["libro", "cuaderno"];
    carrito = null; //se vacía automáticamente

    let comentario: string = "¡Excelente explicación";
    let likes: number = 220;
    let esFavorito: boolean = true;

    let resultado: string | number;

    resultado = "ok";
    resultado = 200;
    //resultado = true;

    type Usuario = {
        nombre: string;
        fechaNacimiento: string | null;
    };

    let persona: Usuario = {
        nombre: "Ana",
        fechaNacimiento: null
    }

    let data: any = "cargando datos...";
    data = {titulo: "Nuevo video", autor: "DevSenior"};
    data = [1, "hola", true];

    let videosRecomendados: string[] = [
        "Tutorial TypeScript desde cero",
        "Detrás de cámara Dev Senior",
        "Top 5 de extensiones para Vs Code"
    ];

    let numeros = [1,2,4,5];

    //Arrays de diferentes tipos
    let datos: (string | number | boolean)[] = [
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

    type Estadisticas = {
        likes: number;
        vistas: number;
        comentarios: number;
    };

    type Video = {
        titulo: string;
        duracion: number;
        autor: string;
        estadisticas: Estadisticas;
    }

    let miVideo: Video = {
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
    
    constructor(
        public nombre: string,
        public correo: string,
        public canal: string
    )
    {}

    subirVideo(titulo: string){
        console.log(`${this.nombre} ha subido un nuevo video: ${titulo}`)
    }

    comentar(video: string, comentario: string){
        console.log(`${this.nombre} comentó en ${video}: ${comentario}`);
    }

}

const usuario1 = new UsuarioYoutube("DevSeniorCode", "dev@sessionStorage.com", "Code2025");
usuario1.subirVideo("Aprende TypeScript");
usuario1.comentar("Aprende TypeScript", "Gracias por subir este tipo d econtenido");