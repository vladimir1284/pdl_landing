<script>
	import Youtube from "svelte-youtube-embed";

	import Cog from 'svelte-material-icons/CogOutline.svelte';
	import HeadLightbulb from 'svelte-material-icons/HeadLightbulb.svelte';
	import ApplicationBracesOutline from 'svelte-material-icons/ApplicationBracesOutline.svelte';
	import ChartAreaspline from 'svelte-material-icons/ChartAreaspline.svelte';
	import Power from 'svelte-material-icons/Power.svelte';
	import CheckAll from 'svelte-material-icons/CheckAll.svelte';
	import { base } from '$app/paths';

	const tabs = [
		{
			icon: Cog,
			css_class: ' active show',
			label: 'Servicios de automatización',
			title: 'Servicios de automatización',
			image: 'Ke3ILwynhaE',
			body: 'Desarrollamos soluciones de automatización libres con énfasis en la Industria 4.0.',
			bullets: [
				'Reparación/modernización de sistemas industriales automáticos.',
				'Modernización de equipos industriales para añadir supervisión y control a través de la Internet (IoT).',
				'Sistemas de mantenimiento predictivo basados en el monitoreo continuo para prever y prevenir posibles fallos en los equipos industriales.',
				'Identificamos oportunidades para la automatización de otros procesos dentro de la cadena de producción o logística de la empresa.'
			]
		},
		{
			icon: ApplicationBracesOutline,
			css_class: '',
			label: 'Servicios informáticos',
			title: 'Servicios informáticos',
			image: '5S6Q6Alpd_Y',
			body: 'Ladetec ofrece una amplia gama de servicios de software, brindando soluciones integrales para optimizar la operación y rendimiento de tu negocio.',
			bullets: [
				'Páginas web.',
				'Catálogos en línea.',
				'Tienda en línea.',
				'Menú digital.',
				'Bitácoras (blog).',
				'Aplicaciones para celulares.',
				'Software de gestión, control de inventarios.'
			]
		},
		{
			icon: Power,
			css_class: '',
			label: 'Instalaciones Eléctricas',
			title: 'Servicios de Instalaciones Eléctricas',
			image: 'had3b88-V3Q',
			body: 'Ladetec destaca en sus servicios eléctricos por la alta capacitación y gran experiencia de sus especialistas.',
			bullets: [
				'Reparación o cableado nuevo de instalaciones eléctricas.',
				'Diseño e instalación de sistemas de alimentación ininterrumpida.',
				'Reparación/modernización de sistemas eléctricos de automática industrial.',
				'Diseño de sistemas de protecciones eléctricas.',
				'Sistemas remoto de monitorización de energía.',
				'Estudios energéticos y acomodos de carga.'
			]
		},
		{
			icon: HeadLightbulb,
			css_class: '',
			label: 'Servicios de capacitación',
			title: 'Servicios de capacitación y asesoría',
			image: `${base}/assets/img/Linea4.Capacitación.jpg`,
			body: 'Ladetec tiene una larga experiencia en el entrenamiento y la capacitación del personal de servicio técnico y del personal de la explotación de la información de radar.',
			bullets: [
				'Asesoría para la adquisición de radares meteorológicos',
				'Confección de especificaciones técnicas para la adquisición de un radar',
				'Selección de la ubicación de un radar meteorológico',
				'Cursos de entrenamiento presencial (servicio técnico, explotación de radar)',
				'Cursos de Tecnologías de Radar y métodos de Meteorología de Radar',
				'Tutoría de tesis de maestría o doctorado en temas de Meteorología de Radar o Tecnologías de Radar',
				'Cursos a distancia en temáticas específicas de Radares Meteorológicos'
			]
		}
	];

	function navigate(index) {
		tabs.forEach((tab) => {
			tab.css_class = '';
		});
		tabs[index].css_class = ' active show';
	}
</script>

<section id="tabs" class="tabs">
	<div class="container" data-aos="fade-up">
		<ul class="nav nav-tabs row d-flex">
			{#each tabs as tab, index}
				<li class="nav-item col-3">
					<!-- svelte-ignore a11y-missing-attribute -->
					<button
						on:click={() => navigate(index)}
						class={'nav-link' + tab.css_class}
						data-bs-toggle="tab"
						data-bs-target="#tab-{index + 1}"
					>
						<svelte:component this={tab.icon} width="3em" height="3em" />
						<h4 class="d-none d-lg-block">{tab.label}</h4>
					</button>
				</li>
			{/each}
		</ul>

		<div class="tab-content">
			{#each tabs as tab, index}
				<div class={'tab-pane' + tab.css_class} id="tab-{index + 1}">
					<div class="row">
						<div
							class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<h3>{tab.title}</h3>
							<p class="fst-italic">
								{tab.body}
							</p>
							<ul>
								{#each tab.bullets as bullet}
									<li>
										<CheckAll color="#0000cc" />
										{bullet}
									</li>
								{/each}
							</ul>
						</div>
						<div
							class="col-lg-6 order-1 order-lg-2 text-center"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<Youtube id={tab.image} --title-color="#111111" />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
