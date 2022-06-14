<template>
  <div class="home">
    <BreadCrumbs :trail="trail" />
    <ContentRender :rows="rows" />
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID } from '../lib';
import ContentRender from '../components/ContentRender.vue';

export default {
  name: 'Home',
  components: {
    BreadCrumbs,
    ContentRender
  },
  data: () => ({
    trail: [{ text: 'Home' }],
    page: null,
    rows: []
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Home}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Home}/row`;
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
