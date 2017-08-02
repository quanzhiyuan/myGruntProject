require.config({
	paths: {
　　　"jquery": "jquery-3.2.1.min",
　　　"vue": "vue.min"
　}
});
require(['jquery','vue'], function ($,Vue){
  $(document).ready(function(){
    document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'
  })
  var indexvue = new Vue({
  	el:'#index',
  	data: {
  		bannerUrl: '',
  		classification: {},
  		placeholder: ''
  	},
  	created: function() { 
  		var vm = this
  	   $.get('/testData/test.json').then(function (res) {
  	   	vm.bannerUrl = res && res.homeShow && res.homeShow.img
  	   	vm.classification = res && res.classification
  	   	vm.placeholder = res && res.placeholder
  	   })
  	}
  })
});