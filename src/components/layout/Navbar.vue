<template>
  <b-navbar type="is-primary">
    <template #brand>
      <b-navbar-item tag="router-link" to="/">
        Jeff Rossi | Software Developer
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-dropdown label="Menu" right>
        <b-navbar-item href="/">Home</b-navbar-item>
        <b-navbar-item href="/contact">Contact</b-navbar-item>
        <b-navbar-item href="/employment">Employment</b-navbar-item>
        <b-navbar-item href="/education">Education</b-navbar-item>
        <b-navbar-item href="/references">References</b-navbar-item>
        <b-navbar-item href="/testimonials">Testimonials</b-navbar-item>
        <b-navbar-item href="/links">Links</b-navbar-item>
        <b-navbar-item href="/download">Download</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>