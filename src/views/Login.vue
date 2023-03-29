<template>
  <div class="login-container">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="text-center">Login Form</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="onLogin">
                <v-text-field
                  v-model.trim="data.email"
                  :error-messages="emailErrors"
                  label="Email"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  v-model.trim="data.password"
                  :error-messages="passwordErrors"
                  label="Password"
                  outlined
                  required
                  type="password"
                ></v-text-field>

                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useRouter } from "vue-router";

const data = reactive({
  email: "",
  password: "",
});

const router = useRouter();

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, data);

const passwordErrors = computed(() => {
  const errors = [];
  if (!v$.value.password.$dirty) {
    return errors;
  }

  v$.value.password.required.$invalid && errors.push("Password is required");
  v$.value.password.minLength.$invalid &&
    errors.push("Password must be at least 6 characters");

  return errors;
});

const emailErrors = computed(() => {
  const errors = [];
  if (!v$.value.email.$dirty) {
    return errors;
  }

  v$.value.email.required.$invalid && errors.push("Email is required");
  v$.value.email.email.$invalid && errors.push("Incorrect Email format");

  return errors;
});

const onLogin = async () => {
  const result = await v$.value.$validate();
  if (!result) {
    return;
  }

  window.localStorage.setItem("user", JSON.stringify(data.email));

  router.push("/game");
};
</script>

<style scoped>
.login-container {
  margin-top: 20%;
}
</style>
