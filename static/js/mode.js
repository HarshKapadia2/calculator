const mode = document.querySelector("#mode");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const body = document.querySelector("body");
const err = document.querySelector(".error");
const clrBtn = document.querySelector(".clr-btn");
const eqBtn = document.querySelector(".equal-btn");

const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

let localMode;




window.addEventListener
(
	"load",
	() =>
	{
		localMode = localStorage.getItem("hk_calculator_mode");

		if(!localMode)
		{
			localStorage.setItem("hk_calculator_mode", "Light");
			localMode = "Light";
		}

		else if(localMode === "Dark")
			changeMode();
	}
);




mode.addEventListener
(
	"click",
	() =>
	{
		if(localMode === "Light")
		{
			localStorage.setItem("hk_calculator_mode", "Dark");
			localMode = "Dark";
			changeMode();
		}
		
		else if(localMode === "Dark")
		{
			localStorage.setItem("hk_calculator_mode", "Light");
			localMode = "Light";
			changeMode();
		}
	}
);




function changeMode()
{
	moon.classList.toggle("hide");
	sun.classList.toggle("hide");
	body.classList.toggle("body-color");
	err.classList.toggle("error-color");
	clrBtn.classList.toggle("clr-btn-color");
	eqBtn.classList.toggle("equal-btn-color");
	
	for(let i = 0; i < buttons.length; i++)
		buttons[i].classList.toggle("button-color");
	
	for(let i = 0; i < inputs.length; i++)
		inputs[i].classList.toggle("input-color");

	for(let i = 0; i < numBtns.length; i++)
		numBtns[i].classList.toggle("num-btn-color");
	
	for(let i = 0; i < opBtns.length; i++)
		opBtns[i].classList.toggle("op-btn-color");
}
