<script>
	import ImageLoader from './Image/ImageLoader.svelte';

	import Plus from 'svelte-material-icons/Plus.svelte';
	import Link from 'svelte-material-icons/Link.svelte';
	import { base } from '$app/paths';

	const items = [
		{
			image: 'main.jpg',
			folder: 'assets/img/portfolio/Autoclave/',
			title: 'Autoclave',
			category: 'Hardware',
			url: 'https://meteoradares.wordpress.com/2023/11/25/ladetec-se-esteriliza/'
		},
		{
			image: 'store.png',
			folder: 'assets/img/portfolio/Woo/',
			title: 'Tienda',
			category: 'Software',
			url: 'https://www.ladetec.com/puntoino/'
		},
		{
			image: 'soplado-botellas.jpg',
			folder: 'assets/img/portfolio/Sopladora/',
			title: 'Sopladora',
			category: 'Hardware',
			url: 'https://meteoradares.wordpress.com/2023/08/13/ladetec-se-mete-en-vinagre/'
		}
	];
</script>

<section id="portfolio" class="portfolio">
	<div class="container" data-aos="fade-up">
		<div class="section-title">
			<h2>Portfolio</h2>
			<p>
				En nuestro apasionante viaje hacia la excelencia tecnológica, nos enorgullece presentarles
				nuestro portafolio, una ventana hacia el mundo de soluciones avanzadas y servicios de
				vanguardia.
			</p>
		</div>

		<div class="row" data-aos="fade-up" data-aos-delay="100">
			<div class="col-lg-12 d-flex justify-content-center">
				<ul id="portfolio-flters">
					<li data-filter="*" class="filter-active">Todos</li>
					<li data-filter=".filter-app">Hardware</li>
					<li data-filter=".filter-card">Software</li>
					<li data-filter=".filter-web">Otros</li>
				</ul>
			</div>
		</div>

		<div
			class="row portfolio-container"
			data-aos="fade-up"
			data-aos-delay="200"
			style="height: 230px;"
		>
			{#each items as item}
				<div class="col-lg-4 col-md-6 portfolio-item filter-{item.category.toLowerCase()}">
					<div class="portfolio-wrap">
						<ImageLoader
							on:load={onload}
							src={`${base}/` + item.folder + item.image}
							alt=""
							css_class={'img-fluid'}
						/>
						<div class="portfolio-info">
							<h4>{item.title}</h4>
							<p>{item.category}</p>
							<div class="portfolio-links">
								<a
									href="assets/img/portfolio/portfolio-1.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Gallery"
									><i class="bx">
										<Plus width="1em" height="1em" />
									</i></a
								>
								{#if item.url != ''}
									<a target="blank" href={item.url} title="More Details">
										<i class="bx">
											<Link width="1em" height="1em" />
										</i></a
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- End Portfolio Section -->
