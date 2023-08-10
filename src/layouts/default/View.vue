<template>

  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Погода" value="myfiles" :to="{name: 'Home'}"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Настройки" value="shared" :to="{name: 'Option'}"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh; overflow: auto !important;">
        <router-view/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
  //
</script>
