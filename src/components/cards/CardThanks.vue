<template>
	<div class="card thanks-card">
		Thank You <b>{{ FormatName(name) }}</b
		>, for your interest, I will try to respond within one business day.
	</div>
</template>

<script>
import { FormatName } from '../../lib'
export default {
	props: ['name'],
	data: () => ({
		FormatName,
	}),
}
</script>

<style>
.card {
	margin: 0.5em 1em 0.5em 1em;
}
</style>
