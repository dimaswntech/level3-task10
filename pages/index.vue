<template>
  <div class="min-h-screen bg-gray-100">
    <div class=" flex flex-col items-center justify-center">
      <p class="mt-7 text-4xl mb-1.5">Data Gudang</p>
      <p class="mb-5 text-4xl">Toko Kelontong Pijar</p>
      <button @click="toggleModal"
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-7 ease-linear transition-all duration-150">
        Tambah Data
      </button>
      <home-table-product></home-table-product>

      <modal-tambahProduct :show="showModal" @customModal="valueShow" @successAdd="refreshPage"></modal-tambahProduct>
    </div>
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
    toggleModal: function () {
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
