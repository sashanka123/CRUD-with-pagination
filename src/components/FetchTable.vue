<template>
  <div>
    <NavBar></NavBar>
    <TableIt v-if="list" :thedata="computedTableData"></TableIt>
    <PaginationPart v-if="list" v-model="pagination" :totalRecords="list.length" :perPageOptions="perPageOptions"></PaginationPart>
  </div> 
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
import PaginationPart from "./PaginationPart.vue";
import TableIt from "./TableIt.vue";
const perPageOptions=[5,50,100];
export default {
  name: "FetchTable",
  components: {
    NavBar,
    PaginationPart,
    TableIt
},
  data() {
    return {
      list: [],
      perPageOptions,
      pagination:{page:1,perPage:perPageOptions[0]},
    };
  },
   mounted() {
    let fetch = async () => {
      let data = await axios.get("http://localhost:3000/employee");
      console.log(data.data);
      this.list = data.data;
    };
    fetch();
  },
  computed:{
      computedTableData(){
      if(!this.list) return []
      else{
        const firstIndex=(this.pagination.page-1)*this.pagination.perPage;
        const lastIndex=this.pagination.page*this.pagination.perPage;
        return this.list.slice(firstIndex,lastIndex);
      }
    }
  },
 
  
};
</script>

<style>
#dbtn{
  box-shadow:0px 0px 6px black;
  background-color: red;
  color:white;
}
#ebtn{
  box-shadow:0px 0px 6px black;
  background-color: green;
  color:white; 
}
#sbtn{
  box-shadow:0px 0px 6px black;
  background-color: blue;
  color:white; 
}
</style>
