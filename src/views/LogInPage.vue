<template>
  <div class="cover">
    <v-container class="fill-height">
      <v-row justify="center" class="fill-height">
        <v-col cols="12" md="4">
          <v-card
            v-vue-aos="{ animationClass: 'animate__fadeIn animate__animated' }"
            width="500"
            height="400"
            class="background"
            elevation="4"
          >
          <br>
            <v-card-title class="text-h4 justify-center teal--text">
              LOGIN
            </v-card-title>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form class="mx-3" @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Email"
                  :rules="{
                    required: true,
                    email: 'user@gmail.com',
                  }"
                >
                  <v-text-field
                    v-model="email"
                    class="mx-12"
                    :error-messages="errors"
                    label="Email"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  />
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    color="#000000"
                    class="mx-12"
                    type="password"
                    :rules="passwordRules"
                    :error-messages="errors"
                    label="Password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  />
                </validation-provider>
                <validation-provider>
                  <v-select
                    class="mx-12"
                    v-model="select"
                    :items="items"
                    :error-messages="selectErrors"
                    label="login as"
                    required
                    @change="$v.select.$touch()"
                    @blur="$v.select.$touch()"
                  ></v-select>
                </validation-provider>
                <v-row justify="center">
                <v-btn
                  justify="center"
                  class="teal accent-4 mt-6 rounded-5 white--text "
                  type="submit"
                  :disabled="invalid"
                >
                  LogIn
                </v-btn>
                </v-row>
                <v-dialog v-model="dialog" width="500">
                  <v-card>
                    <v-card-title class="text-h5 ">
                      Wrong login
                    </v-card-title>

                    <v-card-text class="text-center mt-5">
                      Please try again
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                      <v-spacer />
                      <v-btn class="teal accent-4" @click="dialog = false">
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- <v-btn
                  class="teal accent-4 rounded-5 white--text my-9"
                  @click="clear"
                >
                  clear
                </v-btn> -->
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    password: '',
    select: null,
    items: ['Employee', 'Company'],
    dialog: '',
    passwordRules: [
      (value) => !!value || 'Please type password.',
      (value) => (value && value.length >= 6) || 'minimum 6 characters'
    ]
  }),

  methods: {
    submit () {
      this.$v.$touch()
    }
    // clear () {
    //   this.password = ''
    //   this.email = ''
    //   this.select = null
    //   this.$refs.observer.reset()
    // }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
.background {
  position: relative;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  /* opacity: 0.9; */
}
.cover {
  width: 100%;
  height: 100vh;
  background-size: cover;
  /* background-image: url(https://www.jpbprofessionalmarketing.com/wp-content/uploads/2020/02/AdobeStock_301779119-scaled.jpeg); */
  /* background-image: url(https://www.jpbprofessionalmarketing.com/wp-content/uploads/2020/02/AdobeStock_301779119-scaled.jpeg); */
}
.h4{
   font-family: "Abel";
}
body {
  overflow: hidden;
  height: 100vh;
}
</style>
