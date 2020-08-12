// function fibonacci(num) {
//     var a = 1,
//         b = 0,
//         temp;

//     while (num >= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }

//     return b;
// }

function fibonacci(number) {

	var sequence = [1, 1];

	for (var i = 2; i < number; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence[number-1];
}

const form = document.getElementById('form')
const answerDiv = document.getElementById("answer")
form.addEventListener('submit', handler)

function handler(event) {
    event.preventDefault()
    const userInput = event.target.elements.number.value
    answerDiv.innerText = `The sum of finonaci sequece of ${userInput} is ${fibonacci(userInput)}`
}