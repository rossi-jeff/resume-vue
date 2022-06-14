<template>
  <div class="box">
    <div v-for="row of rows" :key="row.Id">
      <div v-for="col of row.Columns" :key="col.Id" v-html="col.Content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rows']
}
</script>