<template>
  <div>
    <form @submit="update">
      <label>Nama Barang</label>
      <input type="text" v-model="post.nama_produk">
      {{ post.nama_produk }}}
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

  mounted() {

    //get data post by ID
    this.$axios.get(`/api/products/${this.$route.params.id}`)
      .then(response => {
        this.post.nama_produk = response.data.data.nama_produk,
          this.post.keterangan = response.data.data.keterangan,
          this.post.harga = response.data.data.harga,
          this.post.jumlah = response.data.data.jumlah
      })
  },

  methods: {

    async update(e) {
      e.preventDefault()

      //send data ke Rest API untuk update
      await this.$axios.put(`/api/products/${this.$route.params.id}`, {

        //data yang dikirim
        nama_produk: this.post.nama_produk,
        keterangan: this.post.keterangan,
        harga: this.post.harga,
        jumlah: this.post.jumlah

      })
        .then(() => {

          //redirect ke route "post"
          this.$router.push({
            name: 'home'
          })

        })
        .catch(error => {

          //assign error validasi
          this.validation = error.response.data
        })
    }

  }

}
</script>

<style>

</style>
