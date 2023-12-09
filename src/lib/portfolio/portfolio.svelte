<script>
	import ImageLoader from '../Image/ImageLoader.svelte';
	import { Modal, Carousel } from 'flowbite-svelte';

	import Plus from 'svelte-material-icons/Plus.svelte';
	import Link from 'svelte-material-icons/Link.svelte';
	import { base } from '$app/paths';
	import data from './portfolio.json';
	const items = data.items;
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
				<Modal title={item.title} bind:open={item.modal_open} size="xl" autoclose>
					<Carousel
						images={item.images}
						let:Indicators
						let:Controls
						duration="3000"
						imgClass="object-contain h-full w-fit rounded-sm"
					>
						<Indicators />
						<Controls class="items-center text-blue-800  pt-4" />
					</Carousel>
				</Modal>
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
								<button on:click={() => (item.modal_open = true)} title="Gallery">
									<i class="bx">
										<Plus width="1em" height="1em" />
									</i>
								</button>
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
