const express = require('express');
const app = express();
const fetch = require('node-fetch');
const url ='http://www.omdbapi.com/?t=jumanji&apikey=739db316';
const key = '739db316';

async function pelicula(){
    try{
        const respuesta = await fetch(url)
        const json = await respuesta.json() 
        const data = { nombre: json.Title, descripcion: json.Plot, imagen: json.Poster };
        return data;    
    }    
    catch(e){
        console.error(e);
    }
}
pelicula().then(data => console.log(data)).catch(error => console.log(error));
