<script setup lang="ts">
import {useAppStore} from "@/store/app";
const temp: any = useAppStore()

</script>

<template>
  <div v-for="(item, index) in temp.weather" :key="index" style="margin-top: 2em">
   <v-card
      v-if="temp.weather !== null"
      class="ma-auto"
      max-width="450"
    >
      <div class="contre">
        <h3>{{ item.name }}</h3>
      </div>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col
            class="text-h2"
            cols="6"
          >
            {{ item.main.temp }}&deg;C
          </v-col>

          <v-col cols="6" class="text-right">
            <img style="margin: 0 auto; display: flex;"
                 :src="'https://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'">
          </v-col>
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item
          density="compact"
          prepend-icon="mdi-weather-windy"
        >
          <v-list-item-subtitle>{{ item.wind.speed }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item
          density="compact"
        >
          <v-list-item-subtitle>{{ item.main.humidity }}%</v-list-item-subtitle>
        </v-list-item>
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="sass">
.contre
  display: flex
  text-align: center
  align-items: center
  padding: 1em
</style>
