<script lang="ts">
	import Card from './component/Card.svelte'

	export let name: string;
</script>

<main class="w-4/5 my-0 mx-auto px-3 py-11">
	Hello, {name}
</main>

<style global lang="postcss">
	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */

	@tailwind utilities;
</style>