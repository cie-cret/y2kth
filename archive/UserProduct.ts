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
        tags: ['best', 'tops', 'male']
      },
      {
        pName: 'Collection 2',
        pImage: 'product-test-2',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 200,
        tags: ['best', 'bottoms', 'female']
      },
      {
        pName: 'Collection 3',
        pImage: 'product-test-3',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 300,
        tags: ['best', 'accessory', 'male', 'female']
      },
      {
        pName: 'Collection 4',
        pImage: 'product-test-4',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 400,
        tags: ['new', 'accessory', 'male']
      },
      {
        pName: 'Collection 5',
        pImage: 'product-test-5',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 500,
        tags: ['new', 'tops', 'female']
      },
      {
        pName: 'Collection 6',
        pImage: 'product-test-6',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 600,
        tags: ['new', 'bottoms', 'male', 'female']
      },
      {
        pName: 'Collection 7',
        pImage: 'product-test-7',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 700,
        tags: ['tops', 'female']
      },
      {
        pName: 'Collection 8',
        pImage: 'product-test-8',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 800,
        tags: ['sale', 'bottoms', 'male', 'female']
      },
      {
        pName: 'Collection 9',
        pImage: 'product-test-9',
        quantity: 10,
        about: 'Y2K Style',
        status: 'open',
        price: 900,
        tags: ['limited', 'accessory', 'female']
      }
    ],
    filterProductList: [],
    filteredTags: []
  }),
  actions: {
    filterProducts(searchText: string, filteredTags: Array<Object>): unknown {
      let filteredProductList = this.productList

      // Filter
      const tagArray: Array<string> = []
      filteredTags.map((tag) => tagArray.push(tag))
      console.log('Array', tagArray)

      filteredProductList = filteredProductList.filter((product) => product.tags.includes(tagArray))
      console.log('Filter', filteredProductList)

      // for (const tag of tagArray) {
      //   filteredProductList = filteredProductList.filter((product) => product.tags.includes(tag))
      //   // filteredProductList.flat()
      //   // console.log('Filter', filteredProductList)
      // }

      // Search
      if (searchText !== '') {
        filteredProductList = filteredProductList.filter((product) =>
          product.pName.includes(searchText)
        )
      }

      // console.log(filteredProductList)
      return filteredProductList
    }
  }
})
