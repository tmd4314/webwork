import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
  state: () => ({ userid: 'Lee', name: '이승민' }),
  getters: { },
  actions: {
    setUserid(userid) {
      this.userid = userid;
    },
  },
})