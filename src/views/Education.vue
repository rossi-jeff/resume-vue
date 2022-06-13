<template>
  <div class="education">
    <BreadCrumbs :trail="trail" />
    <div v-for="school of getSchools" :key="school.Id">{{ school.Name }}</div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID } from '../lib';
import { GET_SCHOOLS_QUERY } from '../graphql/queries';

export default {
  name: 'Eduction',
  components: {
    BreadCrumbs
  },
  apollo: {
    getSchools: GET_SCHOOLS_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Eduction' }],
    schools: [],
    page: null,
    rows: [],
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Education}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Education}/row`;
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