<template>
  <div>
    <form @submit="store">
      <label>Nama Barang</label>
      <input type="text" v-model="post.nama_produk">
      <label>Keterangan</label>
      <input type="text" v-model="post.keterangan"/>
      <label>Harga</label>
      <input type="number" v-model="post.harga"/>
      <label>Jumlah</label>
      <input type="number" v-model="post.jumlah"/>
      <button type="submit">simpan</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      //state post
      post: {
        nama_produk: '',
        keterangan: '',
        harga: null,
        jumlah: null
      },
      //state validation
      validation: []
    }
  },

  methods: {

    //method "store"
    async store(e) {
      e.preventDefault()

      //send data ke Rest API
      await this.$axios.post('/api/products', {

        //data yang dikirim ke server
        nama_produk: this.post.nama_produk,
        keterangan: this.post.keterangan,
        harga: this.post.harga,
        jumlah: this.post.jumlah,

      })
        .then(() => {

          //redirect ke route "post"
          this.$router.push({
            name: 'home'
          })

        })
        .catch(error => {
          //assign validation
          this.validation = error.response.data
        })
    }
  }

}
</script>

<style>

</style>
