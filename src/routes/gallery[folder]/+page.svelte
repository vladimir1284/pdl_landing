<script>
	import { onMount } from 'svelte';

	import Menu from 'svelte-material-icons/Menu.svelte';

	import Hero from '../lib/hero.svelte';
	import Clients from '../lib/clients.svelte';
	import About from '../lib/about/about.svelte';
	import Count from '../lib/count.svelte';
	import Tabs from '../lib/tabs.svelte';
	import Portfolio from '../lib/portfolio.svelte';
	import Testimonials from '../lib/testimonials/testimonials.svelte';
	import Team from '../lib/team/team.svelte';
	import Footer from '../lib/footer.svelte';

	import { template } from '../lib/template';

	onMount(template);
</script>

<Footer />
