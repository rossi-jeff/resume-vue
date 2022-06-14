<template>
  <div class="card-reference card">
    <header class="card-header">
      <router-link class="card-header-title" :to="{ name: 'ReferenceDetail', params: { uuid: reference.UUID } }">{{ FormatName(reference.Name) }}</router-link>
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
</template>

<script>
import { FormatName, FormatAddress } from '../../lib';

export default {
  props: ['reference'],
  data: () => ({
    FormatName,
    FormatAddress
  })
}
</script>

<style>
.card {
  margin: 0.5em 1em 0.5em 1em;
}
</style>