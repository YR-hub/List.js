// Variable con la lista de la compra
let listaCompra = ['Manzanas', 'Arroz', 'Leche', 'Pan', 'Huevos'];

// Modificar la lista de la compra y añadir "Aceite de Girasol"
listaCompra.push('Aceite de Girasol');

// Modificar la lista de la compra y eliminar "Aceite de Girasol"
listaCompra = listaCompra.filter(item => item !== 'Aceite de Girasol');

// Lista de tus 3 películas favoritas
let peliculasFavoritas = [
  { titulo: 'El Padrino', director: 'Francis Ford Coppola', fecha: '1972' },
  { titulo: 'Pulp Fiction', director: 'Quentin Tarantino', fecha: '1994' },
  { titulo: 'El Señor de los Anillos: El Retorno del Rey', director: 'Peter Jackson', fecha: '2003' }
];

// Nueva lista con las películas posteriores al 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha > '2010');

// Nueva lista con los directores de la lista de películas original
let directores = peliculasFavoritas.map(pelicula => pelicula.director);

// Nueva lista con los títulos de la lista de películas original
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

// Nueva lista que concatena la lista de directores y la lista de los títulos utilizando concat
let directoresTitulosConcatenados = directores.concat(titulos);

// Nueva lista que concatena la lista de directores y la lista de los títulos utilizando el factor de propagación
let directoresTitulosConcatenadosSpread = [...directores, ...titulos];
