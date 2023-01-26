import React from "react";
import TodoApp from "./TodoApp.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center d-flex flex-column align-items-center w-50">
			<h1 className="text-center mt-5">todos</h1>
			<TodoApp />
			<div id="stacked-todo"></div>
			<div id="second-stacked-todo"></div>
			<p className="mt-5">
				Made by{" "}
				<a href="https://github.com/jessicabrinegar">Jessie B</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
