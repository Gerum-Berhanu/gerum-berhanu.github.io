document.addEventListener("DOMContentLoaded", ()=>{
	const mainCont = document.getElementById("main-container");
	const ratings = document.querySelectorAll(".ratings");
	const submit = document.getElementById("submit");
	let selected = "";
	ratings.forEach(rate => {
		rate.addEventListener("click", (e)=>{
			if (selected) {
				const lastSelected = document.getElementById(selected);
				lastSelected.classList.remove("bg-white");
				lastSelected.classList.remove("hover:text-gray-900");
				lastSelected.classList.add("bg-gray-700");
				lastSelected.classList.add("text-white/50");
			}
			selected = e.target.getAttribute("data-value");
			e.target.classList.remove("bg-gray-700");
			e.target.classList.remove("text-white/50");
			e.target.classList.add("bg-white");
			e.target.classList.remove("hover:text-gray-900");
		});
	});
	submit.addEventListener("click", ()=>{
		if (selected) {
			mainCont.innerHTML = `
			<div class="bg-gray-800 rounded-2xl sm:p-8 p-6 max-w-sm flex flex-col gap-8 sm:scale-100 scale-90">
				<div class="flex flex-col justify-center items-center">
					<div class="size-32 flex justify-center items-center">
						<img src="./images/illustration-thank-you.svg">
					</div>
					<span class="bg-gray-700 text-xs text-orange-500/75 px-4 py-1 rounded-full">You selected ${selected} out of 5</span>
				</div>

				<div class="flex flex-col gap-2">
					<span class="block text-center text-2xl text-white font-bold">Thank you!</span>
					<span class="block text-center text-white/50 text-sm">We appreciate you thaking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</span>
				</div>
			</div>
			`;
		}
	});
});