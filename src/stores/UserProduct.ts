import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('product', {
  state: () => ({
    productList: [
      {
        pName: 'Collection 1',
        pImage: 'product-test-1',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 100,
        tags: ['best', 'tops', 'masculine']
      },
      {
        pName: 'Collection 2',
        pImage: 'product-test-2',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 200,
        tags: ['best', 'bottoms', 'feminine']
      },
      {
        pName: 'Collection 3',
        pImage: 'product-test-3',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 300,
        tags: ['best', 'accessory', 'masculine', 'feminine']
      },
      {
        pName: 'Collection 4',
        pImage: 'product-test-4',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 400,
        tags: ['new', 'accessory', 'masculine']
      },
      {
        pName: 'Collection 5',
        pImage: 'product-test-5',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 500,
        tags: ['new', 'bottoms', 'feminine']
      },
      {
        pName: 'Collection 6',
        pImage: 'product-test-6',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 600,
        tags: ['new', 'bottoms', 'masculine', 'feminine']
      },
      {
        pName: 'Collection 7',
        pImage: 'product-test-7',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 700,
        tags: ['tops', 'feminine']
      },
      {
        pName: 'Collection 8',
        pImage: 'product-test-8',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 800,
        tags: ['sale', 'bottoms', 'masculine', 'feminine']
      },
      {
        pName: 'Collection 9',
        pImage: 'product-test-9',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 900,
        tags: ['limited', 'accessory', 'feminine']
      }
    ]
  }),
  actions: {
    filterProducts(
      searchText: string,
      bodyType: string,
      tagNames: string[],
      pRange: { min: number; max: number }
    ) {
      // Filters
      let filteredProductList = this.productList

      // Search
      if (searchText !== '') {
        filteredProductList = filteredProductList.filter((product) =>
          product.pName.toLowerCase().includes(searchText.toLowerCase())
        )
      }

      // console.log(filteredProductList)

      // Body

      if (bodyType === 'masculine' || bodyType === 'feminine') {
        filteredProductList = filteredProductList.filter((product) =>
          product.tags.includes(bodyType)
        )
        // console.log('Body', filteredProductList)
      }

      // Type
      if (tagNames.length > 0) {
        filteredProductList = filteredProductList.filter((product) =>
          tagNames.some((tag) => product.tags.includes(tag))
        )
      }

      // console.log('Tags:', tagNames)

      // Price
      filteredProductList = filteredProductList.filter(
        (product) => product.price >= pRange.min && product.price <= pRange.max
      )

      // console.log('Price', filteredProductList)
      // console.log('pRangeMin', pRange.min)
      // console.log('pRangeMax', pRange.max)

      return filteredProductList
    }
  }
})
