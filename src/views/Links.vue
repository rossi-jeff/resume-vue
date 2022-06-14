<template>
  <div class="links">
    <BreadCrumbs :trail="trail" />
    <ContentRender :rows="rows" />
    <TableLinks :links="getLinks" />
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID } from '../lib';
import { GET_LINKS_QUERY } from '../graphql/queries';
import TableLinks from '../components/tables/TableLinks.vue';
import ContentRender from '../components/ContentRender.vue';

export default {
  name: 'Links',
  components: {
    BreadCrumbs,
    TableLinks,
    ContentRender
  },
  apollo: {
    getLinks: GET_LINKS_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Links' }],
    page: null,
    rows: []
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Links}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Links}/row`;
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
