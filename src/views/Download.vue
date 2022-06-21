<template>
  <div class="download">
    <BreadCrumbs :trail="trail" />
    <ContentRender :rows="rows" />
    <div class="box">
      <b-button type="is-primary" class="ml-4" @click="print" outlined>Print</b-button>
      <div id="print-container">
        <strong>Jeffrey Rossi</strong>
        <div>Software Developer</div>
        <hr>

        <strong>Employment</strong>
        <hr>
        <div v-for="job of getJobs" :key="job.UUID" style="margin-bottom: 1em;">
          <div>{{ job.Company }}</div>
          <div v-if="job.From && job.To">
            <span style="margin-right: 2em">
              From:
              {{ job.From.Month }}
              {{ job.From.Year }}
            </span>
            <span>
              To:
              {{ job.To.Month }}
              {{ job.To.Year }}
            </span>
          </div>
          <div v-if="job.Address && FormatAddress(job.Address)">
            Address:
            {{ FormatAddress(job.Address) }}
          </div>
          <div v-if="job.Title">
            Title:
            {{ job.Title }}
          </div>
          <div v-if="job.Duties">
            Duties:
            {{ job.Duties }}
          </div>
        </div>

        <strong>Education</strong>
        <hr>
        <div v-for="school of getSchools" :key="school.UUID" style="margin-bottom: 1em;">
          <div>{{ school.Name }}</div>
          <div v-if="school.From && school.To">
            <span style="margin-right: 2em">
              From:
              {{school.From.Month}}
              {{school.From.Year}}
            </span>
            <span>
              To:
              {{school.To.Month}}
              {{school.To.Year}}
            </span>
            <div v-if="school.Address && FormatAddress(school.Address)">
              Address:
              {{FormatAddress(school.Address)}}
            </div>
            <div v-if="school.Program">
              Program:
              {{school.Program}}
            </div>
            <div v-if="school.Degree">
              Degree:
              {{school.Degree}}
            </div>
          </div>
        </div>

        <div style="page-break-after: always;"></div>

        <strong>Jeffrey Rossi</strong>
        <div>Software Developer</div>
        <hr>

        <strong>References</strong>
        <hr>
        <div v-for="reference of getReferences" :key="reference.UUID" style="margin-bottom: 1em;">
          <div>{{ FormatName(reference.Name) }}</div>
          <div v-if="reference.Company">
            Company:
            {{reference.Company}}
          </div>
          <div v-if="reference.Title">
            Title:
            {{reference.Title}}
          </div>
          <div v-if="reference.Address && FormatAddress(reference.Address)">
            Address:
            {{FormatAddress(reference.Address)}}
          </div>
          <div v-if="reference.Phones && reference.Phones.length">
            Phone:
            <span style="margin-right: 2em" v-for="phone of reference.Phones" :key="phone.UUID">{{ phone.Number }}</span>
          </div>
          <div v-if="reference.Emails && reference.Emails.length">
            Email:
            <span style="margin-right: 2em" v-for="email of reference.Emails" :key="email.UUID">{{ email.Address }}</span>
          </div>
        </div>

        <strong>Online</strong>
        <hr>
        <div>
            React:
            <a href="https://resume-react.jeff-rossi.com/" target="_blank">https://resume-react.jeff-rossi.com/</a>
        </div>
        <div>
            Vue:
            <a href="https://resume-vue.jeff-rossi.com/" target="_blank">https://resume-vue.jeff-rossi.com/</a>
        </div>
        <div>
            Angular:
            <a href="https://resume-angular.jeff-rossi.com/" target="_blank">https://resume-angular.jeff-rossi.com/</a>
        </div>
        <div>
            Svelte:
            <a href="https://resume-svelte.jeff-rossi.com/" target="_blank">https://resume-svelte.jeff-rossi.com/</a>
        </div>
        <br/>

        <strong>Contact</strong>
        <hr>
        <div>Address: 1506 Tuscaloosa Ave, Holly Hill Florida 32117</div>
				<div>Home: (386) 226-8913</div>
				<div>Cell: (386) 316-8485</div>
				<div>Email: rossi.jeff@gmail.com</div>
        <br/>

      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID, FormatName, FormatAddress } from '../lib';
import ContentRender from '../components/ContentRender.vue';
import { GET_JOBS_QUERY, GET_SCHOOLS_QUERY, GET_REFERENCES_QUERY } from '../graphql/queries';

export default {
  name: 'Download',
  components: {
    BreadCrumbs,
    ContentRender
  },
  apollo: {
    getJobs: GET_JOBS_QUERY,
    getSchools: GET_SCHOOLS_QUERY,
    getReferences: GET_REFERENCES_QUERY
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Download' }],
    page: null,
    rows: [],
    FormatName,
    FormatAddress
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Resume}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Resume}/row`;
      results = await fetch(url);
      if (results.ok) {
        this.rows = await results.json();
        console.log(this.rows);
      }
    },
    print() {
      const container = document.getElementById('print-container');
      if (container) {
        const content = container.innerHTML
        const printWindow = window.open('', '', 'height=500, width=500');
        if (printWindow) {
          printWindow.document.write('<html>');
          printWindow.document.write('<body>');
          printWindow.document.write(content);
          printWindow.document.write('</body>');
          printWindow.document.write('<style>');
          printWindow.document.write('body { margin:0; padding: 1.5em 2em 1.5em 2em; }');
          printWindow.document.write('hr { margin: 0.25em 0 1em 0; border-top: solid black 1px; }');
          printWindow.document.write('</style>');
          printWindow.document.write('</html>');
          printWindow.document.close();
          printWindow.print();
        }
      }
    }
  },
  created() {
    this.loadContent()
  }
}
</script>

<style>
hr {
  margin: 0.25em 0 1em 0;
  border-top: solid black 1px;
}
#print-container {
  padding: 1.5em 2em 1.5em 2em;
  margin: 1em;
  border: solid black 1px;
}
</style>