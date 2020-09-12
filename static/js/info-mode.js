const body = document.querySelector("body");
const footer = document.querySelector("footer");

const aTags = document.querySelectorAll("a");

window.addEventListener
(
	"load",
	() =>
	{
		if(localStorage.getItem("hk_calculator_mode") === "Dark")
		{
			body.classList.add("body-color");
			footer.classList.add("footer-color");

			for(let i = 0; i < aTags.length; i++)
				aTags[i].classList.add("a-color");
		}
	}
);