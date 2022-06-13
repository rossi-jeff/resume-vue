<template>
  <div class="testimonials">
    <BreadCrumbs :trail="trail" />
    <div v-for="comment of getComments" :key="comment.Id">{{ comment.Message }}</div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID } from '../lib';
import { GET_COMMENTS_QUERY } from '../graphql/queries';

export default {
  name: 'Testimonials',
  components: {
    BreadCrumbs
  },
  apollo: {
    getComments: GET_COMMENTS_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Testimonials' }],
    page: null,
    rows: []
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Testimonials}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Testimonials}/row`;
      results = await fetch(url);
      if (results.ok) {
        this.rows = await results.json();
        console.log(this.rows);
      }
    }
  },
  created() {
    this.loadContent()
  }
}
</script>