import React, { useState } from "react";

const Home = () => {
//Aquí va nuestra lógica 
	const [todos, setTodos] = useState([])

// GET
	
	// fetch (la petición metodo ruta body etc)Copio la dirección del GET de postman ""
	// 1º then (estado: si salió bien o no)
	// 2º then (la info de data)
	// catch: si algo sale mal en cuanto al código va ahí
	// también puedes hacerlo fetch("https://playground.4geeks.com/apis/fake/todos/user/rubenmp92")..
	// GET si solo se pone la URL en el fetch el asume que es un método GET
	const urlTodos = "https://playground.4geeks.com/apis/fake/todos/user/rubenmp92"
	fetch(urlTodos) //petición
	.then((response) =>{
		console.log(response)
		return response.json()})
	// va a coger la info que llega en json y la convierte a javascript y se la envía al siguiente .then que recibe la data
	.then((data) =>{setTo(data)})
	//imprimo esa data
	.catch((err) =>{return err})
	// si algo sale mal me aparece por aquí

//POST: para crear las todos o tareas. GET para traerlas. PUT para actualizarlas
// en el FETCH si solo va la URL es un GET si vamos hacer algún otro método vamos hacer
fetch(urlTodos, {
	method: "POST",
	body: JSON.stringify([]), // para convertir los [] a javascript tengo que utilizar JSON.stringify
	headers: {
		'Content-Type': 'application/json'
	}
})
.then((response) =>{return response.json()})
.then((data) => {console.log(data)})
.catch((err) =>{return err})

//PUT:
// el LET BODY tiene la misma estrutura que lo que habíamos creado en PUT en el body de POSTMAN. Una vez creada se manda en el JSON Stringify (body)
let body = [
	{
		done: false,
		label: "barrer casa"
	},
	{
		done: false,
		label: "pasear perro"
	},
	{
		done: false,
		label: "hacer la cama"
	}

]
fetch(urlTodos, {
	method: "PUT",
	body: JSON.stringify(body),
	headers: {
		'Content-Type': 'application/json'
	}
})
.then((response) =>{return response.json()})
.then((data) =>{console.log(data)})
.catch((err) =>{return err})


	return (
		<div className="text-center">
			{todos.map((todos) =>{
				return <h3>{todos.label}</h3>
			})}
		</div>
	);
};

export default Home;

// Cojo la data que me llegó del GET y se la asigno por medio del setTodos al setTodos que tengo en .then (data)
// y ese todos lo imprimi con un map 
// el useState cada vez que ejecutan la función que actualiza el estado recarga todo el componente