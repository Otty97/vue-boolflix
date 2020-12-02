let myApp = new Vue ({
	el:'#root',
	data:{
		library:[],
	},
	mounted: function(){
			axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result)=> {
				this.library = result.data.response
			});

	}
})
