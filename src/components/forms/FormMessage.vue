<template>
  <div class="form-message box">
    
    <div class="mb-4">
      <b-field label="Subject">
        <b-input v-model="contact.Subject"></b-input>
      </b-field>
    </div>

    <div>
      <b-field label="Message">
        <b-input v-model="contact.Message" type="textarea"></b-input>
      </b-field>
    </div>

  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>