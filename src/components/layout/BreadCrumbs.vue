<template>
  <div class="bread-crumbs">
    <b-breadcrumb>
      <b-breadcrumb-item v-for="(crumb,i) of trail" :key="i" :crumb="crumb">
        <a :href="crumb.href" v-if="crumb.href">{{ crumb.text }}</a>
        <strong v-else>{{ crumb.text }}</strong>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  props: ['trail']
}
</script>

<style>
.bread-crumbs {
  padding: 0.5em 0.5em 0.5em 1em;
}
</style>