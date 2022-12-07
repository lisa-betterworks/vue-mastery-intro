app.component('product-details', {
    props: {
        details: {
            type: Array
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
    </div>`,


  data() {
    return {
        details: ['50% cotton', '30% wool', '20% polyester'],
    }
},

})