// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    weather: [],
    countryList: null
  }),
  actions:{
    setWeather(data: any): any {
      this.weather = data
    },
    setCountru(data: any): any {
      this.countryList = data
    }
  }
})
