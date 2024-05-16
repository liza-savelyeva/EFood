const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
	
hamb.addEventListener("click", hambHandler);

function hambHandler() {
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
    renderPopup();
}
    
function renderPopup() {
    popup.appendChild(menu);
}