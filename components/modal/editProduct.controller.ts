import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  props: {
    show: Boolean,
    product: Object
  },
  data() {
    return {
      products: {
        nama_produk: '',
        keterangan: '',
        harga: null,
        jumlah: null
      },
      //state validation
      validation: [],
      idProd : this.$props.product.id
    }
  }
})

export default class editProduct extends Vue {
  // async mounted() {
  //   //get data post by ID
  //   this.$axios.get(`/api/products/${this.$props.product.id}`)
  //     .then(response => {
  //       this.$data.products.nama_produk = response.data.data.nama_produk,
  //         this.$data.products.keterangan = response.data.data.keterangan,
  //         this.$data.products.harga = response.data.data.harga,
  //         this.$data.products.jumlah = response.data.data.jumlah
  //     })
  // }

  toggleModal() {
    this.$emit("customModal")
    // this.$axios.get(`/api/products/${this.$props.idProduct}`)
    //   .then(response => {
    //     this.$data.products.nama_produk = response.data.data.nama_produk,
    //       this.$data.products.keterangan = response.data.data.keterangan,
    //       this.$data.products.harga = response.data.data.harga,
    //       this.$data.products.jumlah = response.data.data.jumlah
    //     console.log(response)
    //   })
  }
  // //method "store"
  // async store() {
  //
  //   //send data ke Rest API
  //   await this.$axios.post('/api/products', {
  //
  //     //data yang dikirim ke server
  //     nama_produk: this.$data.products.nama_produk,
  //     keterangan: this.$data.products.keterangan,
  //     harga: this.$data.products.harga,
  //     jumlah: this.$data.products.jumlah,
  //
  //   })
  //     .then(() => {
  //
  //       //redirect ke route "post"
  //       // this.$router.push({
  //       //   name: 'home'
  //       // })
  //       this.$emit("customModal")
  //       this.$emit("successAdd")
  //
  //     })
  //     .catch(error => {
  //       //assign validation
  //       this.$data.validation = error.response.data
  //     })
  // }

  async update() {

    //send data ke Rest API untuk update
    await this.$axios.put(`/api/products/${this.$props.product.id}`, {

      //data yang dikirim
      nama_produk: this.$data.products.nama_produk,
      keterangan: this.$data.products.keterangan,
      harga: this.$data.products.harga,
      jumlah: this.$data.products.jumlah,

    })
      .then(() => {

        //redirect ke route "post"
        // this.$router.push({
        //   name: 'home'
        // })
        this.$emit("customModal")
        this.$emit("successAdd")

      })
      .catch(error => {

        //assign error validasi
        this.$data.validation = error.response.data
      })
  }

}
