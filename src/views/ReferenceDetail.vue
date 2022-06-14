<template>
  <div class="reference-details">
    <BreadCrumbs :trail="trail" />
    <div class="box">
      <div class="card" v-if="reference">
        <header class="card-header">
          <p class="card-header-title" v-if="reference.Name">{{ FormatName(reference.Name) }}</p>
        </header>
        <div class="card-content">
          <div v-if="reference.Company">
            <i>Company:</i>
            {{ reference.Company }}
          </div>
          <div v-if="reference.Title">
            <i>Title:</i>
            {{ reference.Title }}
          </div>
          <div v-if="reference.Address && FormatAddress(reference.Address)">
            <i>Address:</i>
            {{ FormatAddress(reference.Address) }}
          </div>
        </div>
      </div>

      <div class="card" v-if="reference && reference.Phones && reference.Phones.length">
        <header class="card-header">
          <p class="card-header-title">Phone(s)</p>
        </header>
        <div class="card-content">
          <div v-for="phone of reference.Phones" :key="phone.Id">
            <span>{{ phone.Number }}</span>
            <span v-if="phone.Extension" style="margin-left: 2em"> ext: {{ phone.Extension }}</span>
          </div>
        </div>
      </div>

      <div class="card" v-if="reference && reference.Emails && reference.Emails.length">
        <header class="card-header">
          <p class="card-header-title">Email(s)</p>
        </header>
        <div class="card-content">
          <div v-for="email of reference.Emails" :key="email.Id">{{ email.Address }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { SHOW_REFERENCE_QUERY } from '../graphql/queries';
import { FormatAddress, FormatName } from '../lib';
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';

export default {
  components: {
    BreadCrumbs
  },
  data: () => ({
    UUID: null,
    reference: null,
    FormatAddress,
    FormatName,
    trail: [{ text: 'Home', href: '/' },{ text: 'References', href: '/references' }],
  }),
  methods: {
    loadReference() {
      const { UUID } = this
      this.$apollo.query({
        query: SHOW_REFERENCE_QUERY,
        variables: { UUID },
        fetchPolicy: 'network-only',
      })
      .then(results => {
        if (results.data && results.data.showReference) {
          this.reference = results.data.showReference
          console.log(this.reference);
          if (this.trail.length == 2) {
            this.trail.push({
              text: this.FormatName(this.reference.Name)
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.UUID = this.$route.params.uuid;
    this.loadReference()
  }
}
</script>