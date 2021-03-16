let buttonElements = document.getElementsByClassName('calcButt');
let clearButton = document.getElementById('clear');
let calculButton = document.getElementById('equal');
let plusRestButton = document.getElementById('plusrest')

for (let i = 0; i < buttonElements.length; i++) {
	buttonElements[i].addEventListener('click', () => {
		let currentOperation = document.getElementById('inputwindow').value;

		if (buttonElements[i].value == "+" || buttonElements[i].value == "-" || buttonElements[i].value == "*" || buttonElements[i].value == "/" || buttonElements[i].value == "%" || buttonElements[i].value == ".") {
			if (currentOperation[currentOperation.length - 1] != "+" && currentOperation[currentOperation.length - 1] != "-" && currentOperation[currentOperation.length - 1] != "*" && currentOperation[currentOperation.length - 1] != "/" && currentOperation[currentOperation.length - 1] != "%") {
				document.getElementById('inputwindow').value += buttonElements[i].value;
			}

		} else {
			document.getElementById('inputwindow').value += buttonElements[i].value;
		}

	});
}

clearButton.addEventListener('click', () => {
	document.getElementById('inputwindow').value = clearButton.value;
});

calculButton.addEventListener('click', () => {
	var operation = document.getElementById('inputwindow').value
	var lastChar = operation[(operation).length - 1];
	var result = eval(operation);

	if (lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != "%" && operation != "") {
		console.log(operation + "=" + result.toString());
		document.getElementById('inputwindow').value = result;

	}

});


plusRestButton.addEventListener('click', () => {
	var num = document.getElementById('inputwindow').value;
	var j = 0;
	var operator = [];
	var list = Array.from(num);
	for (let i = 0; i < num.length - 1; i++) {
		if (num[i] == "+" || num[i] == "-" || num[i] == "*" || num[i] == "/" || num[i] == "%") {
			console.log(num[i]);
			operator[j] = i;
			j++;
		}
	}

	var cont = operator.slice(-1).pop();
	list.splice(cont + 1, 0, "-");

	console.log(operator);
	console.log(cont);

	if (list[cont] == "-") {
		console.log("ok");
		document.getElementById('inputwindow').value = list.join('');
	}

	document.getElementById('inputwindow').value = list.join('');

});

checkboxElement = document.querySelector('.checkbox');
checkboxElement.addEventListener('change', switchMode);

function switchMode() {
	var body = document.querySelector("body");
	var input = document.querySelector("#inputwindow");
	var result = document.querySelector("#clear");
	var clear = document.querySelector("#equal");
	var numbers = document.getElementsByClassName("numButt");
	var operators = document.getElementsByClassName("operButt");
	var mycalc = document.querySelector(".mycalc");

	body.classList.toggle("darkBody");
	input.classList.toggle("darkOutputButt");
	result.classList.toggle("darkResultButt");
	clear.classList.toggle("darkClearButt");
	mycalc.classList.toggle("darkCalc");
	for (let i = 0; i < numbers.length; i++) {
		numbers[i].classList.toggle("darkNumButt");
	}
	for (let i = 0; i < operators.length; i++) {
		operators[i].classList.toggle("darkOperButt");
	}
}


