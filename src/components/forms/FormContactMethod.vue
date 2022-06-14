<template>
  <div class="form-contact-method box">

    <div class="columns">

      <div class="column">
        <b-field label="Email Type">
          <b-select v-model="contact.EmailType">
            <option v-for="(opt,idx) of emailTypes" :key="idx" :value="opt">{{ opt }}</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Email">
          <b-input v-model="contact.Email"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Phone Type">
          <b-select v-model="contact.PhoneType">
            <option v-for="(opt,idx) of phoneTypes" :key="idx" :value="opt">{{ opt }}</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Phone">
          <b-input v-model="contact.Phone"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Preferred">
          <b-select v-model="contact.Preferred">
            <option v-for="(opt,idx) of prefered" :key="idx" :value="opt">{{ opt }}</option>
          </b-select>
        </b-field>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: ['contact'],
  data: () => ({
    emailTypes: ['Work', 'Home'],
    phoneTypes: ['Work', 'Mobile', 'Home'],
    prefered: ['Email', 'Phone']
  })
}
</script>