/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '../img/edispatch.png',
		title: 'Edistpatch',
		skills: ['Vue', 'vuetifyjs' , 'Nestjs', 'mysql'],
		descripcion:
			'eDispatch es el conjunto de app, web y electrónica  para la gestion de despachos de productos liquidos, como el combustible, agua, etc.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/beacons.png',

		title: 'Beacons',
		skills: ['Angular', 'Tailwind', 'Nestjs', 'mongodb'],
		descripcion:
			' Beacons es una plataforma de monitoreo indoor para diferentes situaciones de negocio, usando beacons y gateways. ',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		//averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/medicita.png',
	
		title: 'Medicita',
		skills: ['Vue', 'vuetifyjs', 'Express' , 'mysql'],
		descripcion:
			'Plataforma para gestionar las citas medicas de centros de salud',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/ferrogest.png',
		
		title: 'FerroGest',
		skills: ['Vue', 'vuetifyjs' , 'Express', 'mysql'],
		descripcion:
			'FerroGest es una plataforma para el control de inventario de una ferreteria',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/monitors4.png',
		
		title: 'Monitor S4',
		skills: ['Vue', 'vuetifyjs', 'Nestjs', 'mongodb'],
		descripcion:
			'Monitor S4 es una plataforma integrada con Wialon para atender eventos de cada vehiculo,l previamente configurado en wialon para la retransmisión',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/mixercon.png',
		
		title: 'QuoteFast',
		skills: ['Vue', 'vuetifyjs', 'Nestjs', 'mysql'],
		descripcion:
			'QuoteFast es una plataforma para la generación de cotizaciones y toda su gestión, integrado con SAP.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	Express: 'simple-icons:express',
	Nestjs: 'logos:nestjs',
	mysql: 'logos:mysql',
	mongodb : 'vscode-icons:file-type-mongo',
	Angular : 'logos:angular-icon',
	Vue: 'logos:vue',
	React : 'logos:react',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	vuetifyjs: 'logos:vuetifyjs',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
