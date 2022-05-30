<template>
  <div class="cover">
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card
            v-vue-aos="{
              animationClass: 'animate__fadeIn animate__animated',
            }"
            width="500"
            height="550"
            class="background"
            elevation="5"
            ><br />
            <v-card-title class="text-h4 justify-center teal--text">
              Register
            </v-card-title>
            <validation-observer ref="observer">
              <form class="mx-3">
                <v-text-field
                  class="mx-12"
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="50"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  class="mx-12 mt-2"
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    class="mx-12 mt-2"
                    :rules="passwordRules"
                    :error-messages="errors"
                    label="Password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  />
                </validation-provider>
                <validation-provider>
                  <v-text-field
                    class="mx-12"
                    label="Confirm Password"
                    v-model="confirmPassword"
                    :error-messages="errors"
                    :rules="[confirmPasswordRules, passwordConfirmationRule]"
                    type="password"
                    required
                    @input="$v.confirmPassword.$touch()"
                    @blur="$v.confirmPassword.$touch()"
                  ></v-text-field>
                </validation-provider>
                <v-radio-group v-model="row" class="mx-12" row>
                  Gender:
                  <v-radio label="male" value="male" class="ml-5"></v-radio>
                  <v-radio label="female" value="female" class="ml-3"></v-radio>
                </v-radio-group>
                <v-row justify="center">
                  <v-checkbox
                    label="company account"
                    value="company account"
                    v-model="checked"
                  ></v-checkbox>
                  <!-- UPLOAD FILE OR IMAGE -->
                  <v-btn
                    class="white--text grey darken-2 ml-7 mt-5"
                    small
                    :disabled="!checked"
                  >
                    <v-icon class="mr-1"> mdi-cloud-upload </v-icon>
                    Upload
                  </v-btn>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    justify="left"
                    class="teal accent-4 rounded-5 white--text"
                    type="submit"
                  >
                    Submit
                  </v-btn>
                </v-row>
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-img > -->
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dialog: '',
    show1: false,
    show2: true,
    checked: false,
    passwordRules: [
      (value) => !!value || 'Please type password.',
      (value) => (value && value.length >= 6) || 'minimum 6 characters'
    ],
    confirmPasswordRules: [(v) => !!v || 'Password is required']
  }),

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordConfirmationRule () {
      return () =>
        this.password === this.confirmPassword || 'Password must match'
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
.h4 {
  font-family: "Abel";
}
.background {
  position: relative;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  bottom: 50%;
  /* opacity: 0.9; */
}
.cover {
  width: 100%;
  height: 100vh;
  background-size: cover;
  /* overflow-y: hidden; */
}
body {
  overflow: hidden;
  height: 100vh;
}
</style>
