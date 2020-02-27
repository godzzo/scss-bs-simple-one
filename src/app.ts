import 'bootstrap';
import './scss/app.scss';

let name = "Town of Wulfgars";

Log(`Hello from ${name} 👌`);

function Log(message: String) {
	console.log(message);
}
