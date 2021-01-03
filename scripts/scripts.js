function copyrightYear() {
	const copyright = document.getElementById("copy");
	const current = new Date();
	copyright.innerHTML = current.getFullYear();
}

function openSearch() {
	const searchButton = document.querySelector(".search_icon");
	const searchForm = document.querySelector(".search_bar");

	searchButton.addEventListener("click", (e) => {
		const selected = searchForm.classList.contains("search_drawer");

		if (selected) {
			searchForm.classList.remove("search_drawer");
		} else {
			searchForm.classList.add("search_drawer");
		}
	});
}

window.onload = () => {
	copyrightYear();
	openSearch();
};
