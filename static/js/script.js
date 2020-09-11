const numButtons = document.querySelectorAll(".num-btn");
const opButtons = document.querySelectorAll(".op-btn");

const clearBtn = document.querySelector("#clr-btn");
const value1 = document.querySelector("#val-1");
const value2 = document.querySelector("#val-2");
const opInput = document.querySelector("#op-input");
const negativeBtn = document.querySelector("#negative-btn");
const positiveBtn = document.querySelector("#positive-btn");
const equalBtn = document.querySelector("#equal-btn");
const answer = document.querySelector("#answer");
const error = document.querySelector("#error");

let activeElementId;




// Handle operand inputs
for(let i = 0; i < numButtons.length; i++)
{
	numButtons[i].addEventListener
	(
		"click",
		() =>
		{
			if(activeElementId === "val-1")
				value1.value = createOperand(value1.value, numButtons[i].innerText);

			else if(activeElementId === "val-2")
				value2.value = createOperand(value2.value, numButtons[i].innerText);
		}
	);
}




// Handle negative sign input
negativeBtn.addEventListener
(
	"click",
	() =>
	{
		if(activeElementId === "val-1")
			value1.value = "-" + value1.value;
		
		else if(activeElementId === "val-2")
			value2.value = "-" + value2.value;
	}
);




// Handle positive sign input
positiveBtn.addEventListener
(
	"click",
	() =>
	{
		if(activeElementId === "val-1" && value1.value[0] === "-")
			value1.value = value1.value.substring(1);
		
		else if(activeElementId === "val-2" && value2.value[0] === "-")
			value2.value = value2.value.substring(1);
	}
);




// Handle operator input
for(let i = 0; i < opButtons.length; i++)
{
	opButtons[i].addEventListener
	(
		"click",
		() =>
		{
			if(activeElementId === "op-input")
				opInput.value = opButtons[i].innerText;
		}
	);
}




// Handle 'equal to' button click
equalBtn.addEventListener
(
	"click",
	() =>
	{
		// Validate input
		if(value1.value === "" || value2.value === "" || opInput.value === "")
		{
			error.innerText = "Empty inputs are not allowed.";
			return;
		}
		if(value1.value === "-" || value2.value === "-")
		{
			error.innerText = "'-' is not an operand.";
			return;
		}
		
		// Calculate answer
		const val1 = parseInt(value1.value);
		const val2 = parseInt(value2.value);

		switch(opInput.value)
		{
			case "+":
				answer.value = add(val1, val2);
				break;

			case "-":
				answer.value = subtract(val1, val2);
				break;

			case "*":
				answer.value = multiply(val1, val2);
				break;

			case "/":
				answer.value = divide(val1, val2);
				break;

			case "%":
				answer.value = modulus(val1, val2);
				break;
		}
	}
);




// Handle 'clear' button click
clearBtn.addEventListener
(
	"click",
	() =>
	{
		answer.value = "";
		opInput.value = "";
		value1.value = "";
		value2.value = "";
		activeElementId = "";
		error.innerText = "";
	}
);




/* ======================================= UTILITY FUNCTIONS =========================================== */


// Get id of focused input
value1.addEventListener
(
	"click",
	() => { activeElementId = document.activeElement.id; }
);

value2.addEventListener
(
	"click",
	() => { activeElementId = document.activeElement.id; }
);

opInput.addEventListener
(
	"click",
	() => { activeElementId = document.activeElement.id; }
);


// Create operand
function createOperand(curVal, digit)
{
	curVal += digit;
	return curVal;
}


// Calculate answer
function add(num1, num2)
{
	return num1 + num2;
}

function subtract(num1, num2)
{
	return num1 - num2;
}

function multiply(num1, num2)
{
	return num1 * num2;
}

function divide(num1, num2)
{
	return num1 / num2;
}

function modulus(num1, num2)
{
	return num1 % num2;
}
