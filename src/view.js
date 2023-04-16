console.log("Hello Michal!");

document.addEventListener("DOMContentLoaded", () => {
	// Get the dropdown element
	const dropdown = document.querySelector(".dynamic-dropdown");

	// Function to handle dropdown change event
	function handleDropdownChange(event) {
		// Show the image with the id that matches the selected option value
		const selectedImage = event.target.value;

		const image = document.querySelector("#renderedImage");
		image.setAttribute("src", selectedImage);
	}

	// Add an event listener to the dropdown
	dropdown.addEventListener("change", handleDropdownChange);
});
