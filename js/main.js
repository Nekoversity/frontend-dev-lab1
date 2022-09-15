//----------------------------------------------------------------
// TASK 3
const N = 14;
const PI = 3.14;

document.addEventListener('keypress', (ev) => {
	const keyPressed = ev.code;
	if (keyPressed === "Space") {
		let r = 3 * N - 5;
		let h = N - 2;

		let S = 2 * PI * r * (r + h);

		alert("Square from the given parameters equals " + S);
	}
});
//----------------------------------------------------------------


//----------------------------------------------------------------
// TASK 2
/*
const N = 14;
const PI = 3.14;

let r = 3 * N - 5;
let h = N - 2;

let S = 2 * PI * r * (r + h);

alert("Square from the given parameters equals " + S);
*/
//----------------------------------------------------------------

//----------------------------------------------------------------
// TASK 1
/*
const N = 14;
const PIB = "Єфремов Андрій Віталійович";

alert(N + ". " + PIB);
*/
//----------------------------------------------------------------