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
		imgSrc: '../img/cat3.png',
		title: 'Edistpatch',
		skills: ['Vue', 'vuetifyjs' , 'Nestjs', 'mysql'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/cat3.png',

		title: 'Beacons',
		skills: ['Angular', 'Tailwind', 'Nestjs', 'mongodb'],
		descripcion:
			' Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/cat3.png',
	
		title: 'Medicita',
		skills: ['Vue', 'vuetifyjs', 'Express' , 'mysql'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/cat3.png',
		
		title: 'FerroGest',
		skills: ['Vue', 'vuetifyjs' , 'Express', 'mysql'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/cat3.png',
		
		title: 'Monitor S4',
		skills: ['Vue', 'vuetifyjs', 'mongodb'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/cat3.png',
		
		title: 'QuoteFast',
		skills: ['Vue', 'vuetifyjs', 'Nestjs', 'mysql'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
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
