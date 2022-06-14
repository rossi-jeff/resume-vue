<template>
  <div class="box">
    <table>
      <thead>
        <tr>
          <th>Site</th>
          <th>Type</th>
          <th>Visit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link of links" :key="link.Id">
          <td>
            <strong>{{ link.Title}}</strong><br/>
            {{ link.Description }}
          </td>
          <td width="10%">{{ link.Type }}</td>
          <td width="15%">
            <a :href="link.Url" target="_blank">Visit {{ link.Title }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>

<style>
.box table {
  border-collapse: collapse;
  width: 100%;
}
.box th {
  border-bottom: 1px dotted #999;
  padding: 0.25em;
}
.box td {
  border-bottom: 1px dotted #999;
  padding: 0.5em;
}
/*
.box tbody tr:nth-child(odd) td {
  background-color: #eee;
}
*/
</style>