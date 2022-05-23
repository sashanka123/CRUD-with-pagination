<template>
  <div id="btns">
    <v-btn id="btn" @click="changePage(0)">First Page</v-btn>
    <v-btn id="btn" @click="changePage(-1)">Prevoius</v-btn>
    <v-btn id="btn">{{ page }} OF {{ pages }}</v-btn>
    <v-btn id="btn" @click="changePage(1)">Next</v-btn>
    <v-btn id="btn" @click="changePage(pages)">Last Page</v-btn>
  </div>
</template>

<script>
export default {
  name: "PaginationPart",
  props: ["totalRecords", "perPageOptions"],
  data() {
    return {
      page: 1,
      perPage: this.perPageOptions[0],
    };
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage;
      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
      changePage(val){
          switch(val){
              case 0:this.page=1;break;
              case -1:this.page=this.page>1?this.page-1:this.page;break;
              case 1:this.page=this.page<this.pages?this.page+1:this.page;break;
              case this.pages:this.page=this.pages;break;
          }
             this.$emit('input',{page:this.page,perPage:this.perPage})
      }
   
  },
};
</script>

<style>
#btn{
  margin:10px;
  box-shadow:0px 0px 7px black;
  color:blue;
  background-color: black;
  color:white;
  border:1px solid white;
}
#btns{
  width:70%;
  margin:0 auto;
}
</style>
