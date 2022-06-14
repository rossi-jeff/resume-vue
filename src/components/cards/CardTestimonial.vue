<template>
  <div class="card-testimonial card">
    <div class="card-content">
      <div>{{ comment.Message }}</div>
      <div class="mt-4" style="text-align: end"> --- {{ author(comment) }}</div>
    </div>
  </div>
</template>

<script>
import { FormatName } from '../../lib';

export default {
  props: ['comment'],
  data: () => ({
    FormatName
  }),
  methods: {
    author(comment) {
      let name = '';
			if (comment) {
				if (
					comment.Admins &&
					comment.Admins.length &&
					comment.Admins[0].Name
				) {
					name = FormatName(comment.Admins[0].Name);
				} else if (
					comment.References &&
					comment.References.length &&
					comment.References[0].Name
				) {
					name = FormatName(comment.References[0].Name);
				} else if (
					comment.Visitors &&
					comment.Visitors.length &&
					comment.Visitors[0].Name
				) {
					name = FormatName(comment.Visitors[0].Name);
				}
			}
			return name;
    }
  }
}
</script>

<style>
.card {
  margin: 0.5em 1em 0.5em 1em;
}
</style>