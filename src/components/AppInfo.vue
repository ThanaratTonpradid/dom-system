<template>
  <v-app-bar dark app clipped-left>
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AppInfo extends Vue {}
</script>
