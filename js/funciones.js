const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button");
let imgActual = 0;
//abrir modal
//hacer click en cuaquiera de los enlaces y ponerle la clase visible a la modal
enlaces.forEach(function(enlace,indice){
enlace.addEventListener("click",function(evento){
	evento.preventDefault();
	imgActual = indice;
	imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
	modal.classList.add("visible");
	});
});


//cerrar modal
//hacer click en cualquier parte de la modal y quitarle la clase visible a la modal

modal.addEventListener("click", function(){
	modal.classList.remove("visible");
});

//navegación imágenes
flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.stopPropagation();
		if (indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
			
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
	});
});

