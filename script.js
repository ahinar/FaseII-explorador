
function masInfoCundi() {
  mostrarInformacion("#flora-cundinamarca", "#info-cundinamarca",   "Especies de flora y Fauna de Cundinamarca",   "Cundinamarca es hogar de una impresionante diversidad de especies, incluyendo frailejones y bromelias en sus páramos, y cóndores que surcan los cielos de estas alturas. En los humedales de la sabana, se pueden encontrar tinguas y alcaravanes, mientras que las montañas neblinosas albergan osos de anteojos, dantas y venados. Además, las arenas blancas del río Magdalena son el hábitat de tortugas charapas y babillas. La región también se enorgullece de tener 87 tipos de orquídeas y 83 de colibríes, demostrando la riqueza natural de Cundinamarca.");
}

function masInfoBoyaca() {
  mostrarInformacion("#flora-boyaca", "#info-boyaca", "Especies de flora y Fauna de Boyacá", "Los ecosistemas de Boyacá, como los páramos y los bosques andinos, son hogares de especies emblemáticas como el frailejón y el oso andino. Además, Boyacá es un punto crucial para las aves migratorias, con 90 especies que visitan anualmente. Entre su flora, se destacan las plantas vasculares como las magnoliopsidas, con 3,131 especies, y las liliopsidas, con 868 especies. Además, cuenta con una notable variedad de musgos y helechos, como los polypodiopsidas, que suman 343 especies. <br> En cuanto a la fauna, Boyacá alberga una amplia gama de vertebrados, incluyendo 105 especies de mamíferos y 1,163 especies de aves, muchas de las cuales son endémicas y migratorias. Los ecosistemas de páramo, bosque húmedo tropical, piedemonte llanero, y bosque andino y altoandino son cruciales para la supervivencia de estas especies.");
}

function mostrarInformacion(floraId, infoId, floraText, infoText) {
  let flora = document.querySelector(floraId);
  let info = document.querySelector(infoId);
  
  flora.innerHTML = floraText;
  info.innerHTML = infoText;
}

function menosInfoCundi() {
  limpiarInformacion("#flora-cundinamarca", "#info-cundinamarca");
}

function menosInfoBoyaca() {
  limpiarInformacion("#flora-boyaca", "#info-boyaca");
}

function limpiarInformacion(floraId, infoId) {
  document.querySelector(floraId).innerHTML = "";
  document.querySelector(infoId).innerHTML = "";
}

//************************************************************** */
const icono = document.querySelector('#icono');
const icono2 = document.querySelector('#icono2');
const tooltip = document.querySelector('#tooltip');
const tooltip2 = document.querySelector('#tooltip2');

const calcularPosicionTooltip = () => {
	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;
	const x1 = icono2.offsetLeft;
	const y1 = icono2.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;
	const anchoTooltip2 = tooltip.clientWidth;
	const altoTooltip2 = tooltip.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 8;
	const arriba = y - altoTooltip - 20;
	const izquierda2 = x1 - (anchoTooltip2 / 2) + 8;
	const arriba2 = y1 - altoTooltip2 -30;

	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;
	tooltip2.style.left = `${izquierda2}px`;
	tooltip2.style.top = `${arriba2}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());

icono.addEventListener('mouseenter', () => {
	tooltip.classList.add('activo');
	calcularPosicionTooltip();


});

icono2.addEventListener('mouseenter', () => {
	
	tooltip2.classList.add('activo');
	calcularPosicionTooltip();


});

let timer;
icono.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('activo');
		tooltip2.classList.remove('activo');
	}, 500);
});


icono2.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('activo');
		tooltip2.classList.remove('activo');
	}, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
tooltip2.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip2.addEventListener('mouseleave', () => tooltip2.classList.remove('activo'));