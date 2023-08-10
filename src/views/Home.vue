<template>
  <v-main>
    <Weather/>
  </v-main>
</template>

<script lang="ts" setup>
import Weather from "@/components/Weather.vue";
import {useAppStore} from "@/store/app";
import axios from "axios";

const temp: any = useAppStore()
let atta: any = []
navigator.geolocation.getCurrentPosition(async function (position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const youSity: any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=` + lat + `&lon=` + lng + `&appid=1a2b44975025506964afe0854fd6162b&lang=ru&units=metric`)
  atta.push(youSity.data)
  if (temp.countryList !== null) {
    for (let i = 0; i < temp.countryList.length; i++) {
      const arraySitu: any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=` + temp.countryList[i] + `&appid=1a2b44975025506964afe0854fd6162b&lang=ru&units=metric`)
      atta.push(arraySitu.data)
    }
  }
  temp.setWeather(atta)
})
</script>
