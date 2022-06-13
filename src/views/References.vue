<template>
  <div class="references">
    <BreadCrumbs :trail="trail" />
    <div v-for="reference of getReferences" :key="reference.Id">{{ FormatName(reference.Name) }}</div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID, FormatName } from '../lib';
import { GET_REFERENCES_QUERY } from '../graphql/queries';

export default {
  name: 'References',
  components: {
    BreadCrumbs
  },
  apollo: {
    getReferences: GET_REFERENCES_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'References' }],
    page: null,
    rows: [],
    FormatName
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.References}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.References}/row`;
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