<template>
  <div class="employment">
    <BreadCrumbs :trail="trail" />
    <ContentRender :rows="rows" />
    <CardJob v-for="job of getJobs" :key="job.Id" :job="job" />
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID } from '../lib';
import { GET_JOBS_QUERY } from '../graphql/queries';
import CardJob from '../components/cards/CardJob.vue';
import ContentRender from '../components/ContentRender.vue';


export default {
  name: 'Employment',
  components: {
    BreadCrumbs,
    CardJob,
    ContentRender
  },
  apollo: {
    getJobs: GET_JOBS_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Employment' }],
    jobs: [],
    page: null,
    rows: []
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Employment}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Employment}/row`;
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
