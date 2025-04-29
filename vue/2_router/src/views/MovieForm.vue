<script>
  export default {
      data: function(){
        return{
          date : '20250423',
          movieList: []
        };
      },
      methods:{
        getMovie(){
        fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt='+this.date)
        .then(response => response.json())
        .then(response => this.movieList = response.boxOfficeResult.dailyBoxOfficeList)
      }
      },
      mounted(){
        this.getMovie();
      }
    }
</script>

<template>
  <input v-model="date"><button @click="getMovie">조회</button>
    <table>
      <tr v-for="movie in movieList">
        <td>{{movie.rank}}</td>
        <td>{{movie.movieNm}}</td>
      </tr>
    </table>
</template>

<style>

</style>