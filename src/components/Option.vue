
<script lang="ts" setup>
import {ref, watch} from "vue";
import {useAppStore} from "@/store/app";

const temp: any = useAppStore()
let model: any = ref(temp.countryList);
const states: any = ref([
  'Alabama', 'Alaska', 'American Samoa', 'Arizona',
  'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Federated States of Micronesia',
  'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
  'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]);

watch(model, async () => {
  temp.setCountru(model._rawValue)
})
</script>
<template>
  <v-app>
    <v-card
      class="ma-auto"
      color="grey-lighten-3"
      min-width="400"
    >
      <v-card-text>
        <v-select

          prepend-icon="mdi-city"
          v-model="model"
          :items="states"
          label="Введите название города"
          multiple
          hint="Выберете город"
          persistent-hint
        ></v-select>
      </v-card-text>
    </v-card>
  </v-app>
</template>


<style scoped>

</style>
