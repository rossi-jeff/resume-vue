<template>
  <div class="card-job card">
    <header class="card-header">
      <p class="card-header-title">{{ job.Company }}</p>
    </header>
    <div class="card-content">
      <div v-if="job.To && job.From">
        <span style="margin-right: 1em;">
          <i>From:</i> 
          {{ job.From.Month }}
          {{ job.From.Year }}
        </span>
        <span>
          <i>To:</i>
          {{ job.To.Month }}
          {{ job.To.Year }}
        </span>
      </div>
      <div v-if="job.Address">
        <i>Address:</i>
        {{ FormatAddress(job.Address) }}
      </div>
      <div v-if="job.Title">
        <i>Title:</i>
        {{ job.Title }}
      </div>
      <div v-if="job.Duties">
        <i>Duties:</i>
        {{ job.Duties }}
      </div>
    </div>
  </div>
</template>

<script>
import { FormatAddress } from '../../lib';

export default {
  props: ['job'],
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