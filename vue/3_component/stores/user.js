import {defineStore} from 'pinia';

export const useUserStore = defineStore("counter", {
  state: () => ({userid: 'kim', grade: 'admin'}),
  getters: { },
  actions: {
    setUserid(userid){
      this.userid = userid;
    }
  }
})