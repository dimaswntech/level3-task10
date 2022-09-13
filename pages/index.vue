<template>
  <div class=" flex flex-col items-center justify-center">
    <p>Data Gudang</p>
    <p>Toko Kelontong Pijar</p>
    <button @click="toggleModal">Tambah Data</button>
    <home-table-product></home-table-product>

    <modal-tambahProduct :show="showModal" @customModal="valueShow" @successAdd="refreshPage"></modal-tambahProduct>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    valueShow: function (val) {
      this.showModal = val;
    },
    refreshPage: function () {
      window.location.reload();
    }
  }
}
</script>

<!--<script>-->
<!--export default {-->

<!--  data() {-->
<!--    return {-->
<!--      posts: [],-->
<!--    }-->
<!--  },-->

<!--  mounted() {-->

<!--    //fething ke Rest API-->
<!--    this.$axios.get('/api/products')-->
<!--      .then(response => {-->

<!--        //assign response ke state "posts"-->
<!--        this.posts = response.data.data-->

<!--      })-->
<!--      .catch(error => {-->
<!--        console.log(error.response.data)-->
<!--      })-->
<!--  },-->
<!--  methods: {-->

<!--    async deletePost(row) {-->
<!--      await this.$axios.delete(`/api/products/${row}`)-->
<!--        .then(() => {-->

<!--          //remove item array by index-->
<!--          this.posts.splice(row.index, 1);-->

<!--        })-->

<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->

<style>

</style>
