const boolflixApp = new Vue({
  el: '#root',
  data: {
    myAPI: 'c529733402bff4adb7705c88539dafa7',
    library: [],
    userInput: ''
   },
   methods:{
    search: function(){
         axios.get('https://api.themoviedb.org/3/search/movie',
      {
				params: {
          api_key: this.myAPI,
          query: this.userInput
        }
      }).then(result => this.library = result.data.results);
    }
   },
});
