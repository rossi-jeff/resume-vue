<template>
  <div class="contact">
    <BreadCrumbs :trail="trail" />
    <ContentRender :rows="rows" />
    <div class="box">
      <b-steps v-model="activeStep" :animated="true">
        <b-step-item label="Name">
          <FormName :name="contact.Name" />
        </b-step-item>
        <b-step-item label="Address">
          <FormAddress :address="contact.Address" />
        </b-step-item>
        <b-step-item label="Contact Methods">
          <FormContactMethod :contact="contact" />
        </b-step-item>
        <b-step-item label="Message">
          <FormMessage :contact="contact" />
        </b-step-item>
        <b-step-item label="Send">
          <ContactConfirm :contact="contact" @sendContact="sendContact" />
        </b-step-item>
      </b-steps>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '../components/layout/BreadCrumbs.vue';
import { contentUrl, ContentUUID, RemoveBlanks } from '../lib';
import FormName from '../components/forms/FormName.vue';
import FormAddress from '../components/forms/FormAddress.vue';
import FormContactMethod from '../components/forms/FormContactMethod.vue';
import FormMessage from '../components/forms/FormMessage.vue';
import ContentRender from '../components/ContentRender.vue';
import { CREATE_CONTACT_MUTATION } from '../graphql/mutations';
import ContactConfirm from '../components/ContactConfirm.vue';

export default {
  name: 'Contact',
  components: {
    BreadCrumbs,
    FormName,
    FormAddress,
    FormContactMethod,
    FormMessage,
    ContentRender,
    ContactConfirm
  },
  data: () => ({
    trail: [{ text: 'Home', href: '/' },{ text: 'Contact' }],
    page: null,
    rows: [],
    activeStep: 0,
    contact: {
      Name: {
        Salutation: '',
        First: '',
        Middle: '',
        Last: '',
        Suffix: ''
      },
      Address: {
        Address: '',
        Suite: '',
        City: '',
        State: '',
        Zip: ''
      },
      Email: '',
      EmailType: 'Work',
      Phone: '',
      PhoneType: 'Work',
      Preferred: 'Email',
      Subject: '',
      Message: ''
    },
  }),
  methods: {
    async loadContent() {
      let url = `${contentUrl}/page/${ContentUUID.Contact}`;
      let results = await fetch(url);
      if (results.ok) {
        this.page = await results.json();
        console.log(this.page);
      }
      url = `${contentUrl}/page/${ContentUUID.Contact}/row`;
      results = await fetch(url);
      if (results.ok) {
        this.rows = await results.json();
        console.log(this.rows);
      }
    },
    sendContact() {
      const {
        Name,
        Address,
        Email,
        EmailType,
        Phone,
        PhoneType,
        Preferred,
        Subject,
        Message
      } = RemoveBlanks(this.contact)
      this.$apollo.mutate({
        mutation: CREATE_CONTACT_MUTATION,
        variables: {
          Name,
          Address,
          Email,
          EmailType,
          Phone,
          PhoneType,
          Preferred,
          Subject,
          Message
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      }) 
    }
  },
  created() {
    this.loadContent()
  }
}
</script>

<style>
strong.send-label {
  display: inline-block;
  width: 10em;
}
</style>
