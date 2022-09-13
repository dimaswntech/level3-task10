import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  data() {
    return {
      dataTheads: ["No.", "Nama Produk", "Keterangan Produk", "Harga Produk", "Jumlah Produk"],
      dataProducts: [],
      showModal: false,
      idVal: {}
    }
  }
})
export default class tableProduct extends Vue {
  async mounted() {
    //fething ke Rest API
    this.$axios.get('/api/products')
      .then(response => {

        //assign response ke state "posts"
        this.$data.dataProducts = response.data.data

      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  async deletePost(row: any) {

    //delete data post by ID
    await this.$axios.delete(`/api/products/${row}`)
      .then(() => {

        //remove item array by index
        this.$data.dataProducts.splice(row.index, 1);
        window.location.reload();
      })
  }

  toggleModal(id: any) {
    this.$data.idVal = id;
    this.$data.showModal = !this.$data.showModal;
  }

  valueShow(val: any) {
    this.$data.showModal = val;
  }

  refreshPage() {
    window.location.reload();
  }
}
