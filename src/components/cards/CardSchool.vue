<template>
  <div class="card-school card">
    <header class="card-header">
      <p class="card-header-title">{{ school.Name }}</p>
    </header>
    <div class="card-content">
      <div v-if="school.To && school.From">
        <span style="margin-right: 1em;">
          <i>From:</i> 
          {{ school.From.Month }}
          {{ school.From.Year }}
        </span>
        <span>
          <i>To:</i>
          {{ school.To.Month }}
          {{ school.To.Year }}
        </span>
      </div>
      <div v-if="school.Address">
        <i>Address:</i>
        {{ FormatAddress(school.Address) }}
      </div>
      <div v-if="school.Program">
        <i>Program:</i>
        {{ school.Program }}
      </div>
      <div v-if="school.Degree">
        <i>Degree:</i>
        {{ school.Degree }}
      </div>
    </div>
  </div>
</template>

<script>
import { FormatAddress } from '../../lib';

export default {
  props: ['school'],
  data: () => ({
    FormatAddress
  })
}
</script>

<style>
.card {
  margin: 0.5em 1em 0.5em 1em;
}
</style>