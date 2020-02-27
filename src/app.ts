import 'bootstrap';
import './scss/app.scss';
import * as $ from "jquery";

let name = "Town of Wulfgars";

Log(`Hello from ${name} 👌`);

$(() => {
	Log(`${name} is loaded and ready 😋`);
});

function Log(message: String) {
	console.log(message);
}
