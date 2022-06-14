<template>
  <div class="form-name box">
    <div class="columns">

      <div class="column">
        <b-field label="Salutation">
          <b-select v-model="name.Salutation">
            <option v-for="(opt,idx) of salutations" :key="idx" :value="opt">{{ opt }}</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="First">
          <b-input v-model="name.First"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Middle">
          <b-input v-model="name.Middle"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Last">
          <b-input v-model="name.Last"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Suffix">
          <b-input v-model="name.Suffix"></b-input>
        </b-field>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data: () => ({
    salutations: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']
  })
}
</script>