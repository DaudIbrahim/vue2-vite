import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 10
  }),
  getters: {
    getCount: (state) => state.count
  },
  actions: {
    /**
     * @param {number} num 
     */
    incrementCount(num) {
      this.count+=num
    },
    emptyCount() {
      this.count = 0
    }
  },
})
