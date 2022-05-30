<template>
  <v-app-bar
    app
    dark
    class="teal accent-4"
    elevation="2"
    height="60px"
    fixed
    scroll-target="#scrolling-techniques"
  >
    <v-btn elevation="0" text height="40" width="150">
      <v-img
        class="mx-2 ml-5"
        src="../assets/job.png"
        max-height="100"
        max-width="130"
        contain
        @click="$router.push({ name: 'HomePage' })"
      ></v-img
    ></v-btn>

    <!-- <v-app-bar-title class="ml-3"> JOB RIDE </v-app-bar-title> -->
    <v-spacer></v-spacer>

    <v-btn
      class="d-flex justify-center justify-space-around mr-3"
      large
      text
      height="35"
      @click="$router.push({ name: 'LogInPage' })"
    >
      LogIn
    </v-btn>

    <v-btn
      class="d-flex justify-center justify-space-around mr-3"
      large
      text
      height="35"
      @click="$router.push({ name: 'RegisterPage' })"
    >
      Register
    </v-btn>
    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon v-if="!$vuetify.theme.dark"> mdi-weather-night </v-icon>
      <v-icon v-else> mdi-white-balance-sunny </v-icon>
    </v-btn>
  </v-app-bar>
</template>
