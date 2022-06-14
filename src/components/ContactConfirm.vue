<template>
  <div class="box">
    <div>
      <strong class="send-label">Name</strong>
      {{ FormatName(contact.Name) }}
    </div>
    <div>
      <strong class="send-label">Address</strong>
      {{ FormatAddress(contact.Address) }}
    </div>
    <div>
      <strong class="send-label">Phone</strong>
      {{ contact.Phone }}
    </div>
    <div>
      <strong class="send-label">Email</strong>
      {{ contact.Email }}
    </div>
    <div>
      <strong class="send-label">Preferred</strong>
      {{ contact.Preferred }}
    </div>
    <div>
      <strong class="send-label">Subject</strong>
      {{ contact.Subject }}
    </div>
    <div>
      <strong class="send-label">Message</strong>
      {{ contact.Message }}
    </div>
    <br/>
    <b-button type="is-primary" @click="sendContact" outlined>
      Send Contact Email
    </b-button>
  </div>
</template>

<script>
import { FormatAddress, FormatName } from '../lib';
export default {
  props: ['contact'],
  data: () => ({
    FormatAddress,
    FormatName
  }),
  methods: {
    sendContact() {
      this.$emit('sendContact');
    }
  }
}
</script>