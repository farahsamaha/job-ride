<template>
  <v-card height="500" elevation="0">
    <v-row
      class="fill-height"
      align-content="center"
      v-vue-aos="{ animationClass: 'animate__fadeIn animate__animated' }"
    >
      <v-col class="text-left justify-start" cols="7" sm="6">
        <v-container class="ml-9">
          <p
            class="
              text-h2 text-left teal--text
              font-weight-regular
              ml-16
              mt-16
              align-center
              justify-center
            "
          >
            We Grow Together
          </p>
          <p class="
             text-h4 text-left
             font-weight-light
              ml-16
              mt-9
              align-center
              justify-center
            ">
            social network for mangement careers
          </p>
          <!-- <v-icon large color="teal accent-4 "> mdi-magnify </v-icon>        -->
          <v-textarea
            class="justify-left mt-16 ml-15 mr-16"
            label="enter your search here"
            prepend-inner-icon="mdi-magnify x-large"
            color="grey lighten-1"
            auto-grow
            outlined
            clearable
            rows="1"
            row-height="5"
          ></v-textarea>
        </v-container>
      </v-col>
      <v-col cols="6">
        <v-container >
          <v-img src="../assets/9814.jpg" height="400" width="550">
          </v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
.h2 {
  margin-top: 100px;
  font-family: "Abel";
}
</style>
