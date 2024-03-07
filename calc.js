function formReset() {
	document.getElementById("calcForm").reset();
	errorMessage.innerHTML = "";
	location.reload();
}

let result = 0;
let errorMessage = document.getElementById("errorMessage");
let inputA = document.querySelector('input[name="numA"]');
let inputB = document.querySelector('input[name="numB"]');
let output = document.querySelector("span.topOutput");
let modeText = document.querySelector("span.modeTxt");

function calcNum() {
	let listDefOps = selOps.options[selOps.selectedIndex].innerHTML;
	//deugger;
	result = eval(parseFloat(inputA.value) + listDefOps + parseFloat(inputB.value));
	if (isNaN(result)) {
		errorMessage.innerHTML = "Nem adtál meg értéket!";
		output.innerHTML = "0";
	} else {
		errorMessage.innerHTML = "";
		if (Number.isInteger(result)) {
			output.innerHTML = result.toFixed(0);
		} else {
			output.innerHTML = result.toFixed(5);
		}
	}
}

function cbSci() {
	errorMessage.innerHTML = "";
	inputA.value = "";
	inputB.value = "";
	output.innerHTML = "0";
	modeText.innerHTML = "[Tudományos mód]";
	var chkBox = document.getElementById("sciBox");
	if (chkBox.checked == true) {
		document.getElementById("selOps").style.display = "none";
		document.getElementById("sciOps").style.display = "block";
		document.getElementById("sciBtn").style.display = "block";
		document.getElementById("defBtn").style.display = "none";
	} else {
		modeText.innerHTML = "[Normál mód]";
		document.getElementById("selOps").style.display = "block";
		document.getElementById("sciOps").style.display = "none";
		document.getElementById("sciBtn").style.display = "none";
		document.getElementById("defBtn").style.display = "block";
		document.getElementById("B").removeAttribute("disabled");
	}
}

function changeSciFunct() {
	if (sciVal == 2 || sciVal == 3 || sciVal == 4 || sciVal == 5 || sciVal == 6) {
		document.getElementById("B").disable = "true";
		inputB.value = "";
	} else {
		document.getElementById("B").removeAttribute("disabled");
	}
}

let sciButton = document.getElementById("sciBtn");
sciButton.addEventListener("click", function () {
	calcSci();
});

function calcSci() {
	//debugger;
	let listSciOps = parseInt(document.getElementById("sciOps"));
	if (inputA.value == "") {
		errorMessage.innerHTML = "Nem adtál meg értéket az A mezőben!";
		output.innerHTML = 0;
	} else {
		switch (listSciOps) {
			case 0:
				if (inputB.value == "") {
					errorMessage.innerHTML = "Nem adtál meg értéket az B mezőben!";
					output.innerHTML = 0;
				} else {
					output.innerHTML = Percentage(parseFloat(inputA.value), parseFloat(inputB.value));
				}
				break;
			case 1:
				if (inputB.value == "") {
					errorMessage.innerHTML = "Nem adtál meg értéket az B mezőben!";
					output.innerHTML = 0;
				} else {
					output.innerHTML = Power(parseFloat(inputA.value), parseFloat(inputB.value));
				}
				break;
			case 2:
				output.innerHTML = squareRoot(parseFloat(inputA.value));
				break;
			case 3:
				output.innerHTML = cubeRoot(parseFloat(inputA.value));
				break;
			case 4:
				output.innerHTML = Log(parseFloat(inputA.value));
				break;
			case 5:
				output.innerHTML = Sin(parseFloat(inputA.value));
				break;
			case 6:
				output.innerHTML = Cos(parseFloat(inputA.value));
				break;
		}
	}
}

function Percentage(a, b) {
	//debugger;
	let peResult = (100 * b) / a;
	peResult = isNaN(peResult) ? 0 : peResult;
	if (Number.isInteger(peResult)) {
		return peResult.toFixed(0);
	} else {
		return peResult.toFixed(5);
	}
}

function Power(a, b) {
	//debugger;
	let pwResult = a ** b;
	pwResult = isNaN(pwResult) ? 0 : pwResult;
	if (Number.isInteger(pwResult)) {
		return pwResult.toFixed(0);
	} else {
		return pwResult.toFixed(5);
	}
}

function squareRoot(a, b) {
	//debugger;
	let sqResult = Math.sqrt(a);
	pwResult = isNaN(sqResult) ? 0 : sqResult;
	if (Number.isInteger(sqResult)) {
		return sqResult.toFixed(0);
	} else {
		return sqResult.toFixed(5);
	}
}

function cubeRoot(a) {
	//debugger;
	let cbResult = Math.cbrt(a);
	cbResult = isNaN(cbResult) ? 0 : cbResult;
	if (Number.isInteger(cbResult)) {
		return cbResult.toFixed(0);
	} else {
		return cbResult.toFixed(5);
	}
}

function Log(a) {
	//debugger;
	let expResult = Math.log(a);
	expResult = isNaN(expResult) ? 0 : expResult;
	if (Number.isInteger(expResult)) {
		return expResult.toFixed(0);
	} else {
		return expResult.toFixed(5);
	}
}

function Sin(a) {
	//debugger;
	let sinResult = Math.sin(a);
	sinResult = isNaN(sinResult) ? 0 : sinResult;
	if (Number.isInteger(sinResult)) {
		return sinResult.toFixed(0);
	} else {
		return sinResult.toFixed(5);
	}
}

function Cos(a) {
	//debugger;
	let cosResult = Math.cos(a);
	cosResult = isNaN(cosResult) ? 0 : cosResult;
	if (Number.isInteger(cosResult)) {
		return cosResult.toFixed(0);
	} else {
		return cosResult.toFixed(5);
	}
}
