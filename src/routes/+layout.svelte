<script lang="ts">
	import FooterMain from '$lib/components/FooterMain.svelte';
	import HeaderHome from '$lib/components/header/HeaderHome.svelte';
	import '../app.css';
</script>

<HeaderHome />
<slot />
<FooterMain />
