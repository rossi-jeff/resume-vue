<template>
  <div class="form-address box">

    <div class="mb-4">
      <b-field label="Address">
        <b-input v-model="address.Address"></b-input>
      </b-field>
    </div>

    <div class="mb-4">
      <b-field label="Suite">
        <b-input v-model="address.Suite"></b-input>
      </b-field>
    </div>

    <div class="columns">

      <div class="column">
        <b-field label="City">
          <b-input v-model="address.City"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="State">
          <b-input v-model="address.State"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Zip">
          <b-input v-model="address.Zip"></b-input>
        </b-field>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['address']
}
</script>