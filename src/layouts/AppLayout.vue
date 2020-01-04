<template>
  <v-app id="inspire">
    <AppInfo />
    <Navbar />
    <v-content>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navbar from '../components/Navbar.vue';
import AppInfo from '../components/AppInfo.vue';

@Component({
  components: {
    AppInfo,
    Navbar,
  },
})
export default class AppLayout extends Vue {
  drawer = false;

  items = [
    { icon: 'fas fa-trending_up', text: 'Most Popular' },
    { icon: 'fas fa-subscriptions', text: 'Subscriptions' },
    { icon: 'fas fa-history', text: 'History' },
    { icon: 'fas fa-featured_play_list', text: 'Playlists' },
    { icon: 'fas fa-watch_later', text: 'Watch Later' },
  ];

  items2 = [
    { picture: 28, text: 'Joseph' },
    { picture: 38, text: 'Apple' },
    { picture: 48, text: 'Xbox Ahoy' },
    { picture: 58, text: 'Nokia' },
    { picture: 78, text: 'MKBHD' },
  ];
}
</script>
