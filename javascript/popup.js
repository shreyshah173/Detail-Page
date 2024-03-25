let showDetailsPopUp;
let goBack;

document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");
	const overlay = document.querySelector(".overlay");

	showDetailsPopUp = () => {
		const moreSection = document.querySelector(".more_section");

		if (moreSection.style.left == "0px") {
			moreSection.style.left = "-100%";
			body.style.overflow = "auto";
			overlay.style.display = "none";
		} else {
			moreSection.style.left = "0px";
			body.style.overflow = "hidden";
			overlay.style.display = "block";
		}
	};

	goBack = () => {
		const moreSection2 = document.querySelector(".more_section2");

		if (moreSection2.style.left == "0px") {
			moreSection2.style.left = "-100%";
			body.style.overflow = "auto";
		} else {
			moreSection2.style.left = "0px";
			body.style.overflow = "hidden";
		}
	};
});
