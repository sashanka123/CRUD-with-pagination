<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Employee Table</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/createemp" id="link"><v-btn light id="create">Create Employee</v-btn></router-link>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 60px"></v-container>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
<style scoped>
#create{
  box-shadow: 0px 0px 10px white;
  font-weight:700;
}
#link{
  text-decoration:none;
}
</style>
