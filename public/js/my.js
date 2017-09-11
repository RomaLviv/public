var app=angular.module("app",['ngRoute']);

app.controller("myCtrl", function($scope, $http,$location){
	$scope.arres=tov;
	$scope.sortType;
	$scope.sortReverse = true;

//	$("#btn").on('click', function(){
//		arr.push({
//			title: $("#addtitle").val(),
//			text: $("#addtext").val()
//		})
//		arr.shift();
//		$scope.$apply();
//	})
});

app.config(function($routeProvider){
	$routeProvider
//	.when('/',{
//		templateUrl: 'index.html'
//	})
//	.when('/tovary/:title',{
//		templateUrl: 'products.html',
//		controller: 'TovaryDetailCtrl'
//	})
	.when('/tovary/:title/:text/tovaru/:photo',{
		templateUrl: 'products.html',
		controller: 'TovaryDetailCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.controller('TovaryDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	$scope.title = $routeParams.title;
	$scope.photo = $routeParams.photo;
	$scope.text = $routeParams.text;
}]);

$(function() {      
  var slider = $('.slider'),
    sliderContent = slider.html(),
    slideWidth = $('.slider-box').outerWidth(),
    slideCount = $('.slider img').length,
    prev = $('.slider-box .prev'),
    next = $('.slider-box .next'),
    slideNum = 1,
  index =0,
  clickBullets=0,
    sliderInterval = 3300, 
    animateTime = 1000,
    course = 1,
    margin = - slideWidth;
  for (var i=0; i<slideCount; i++)
  {
    html=$('.bullets').html() + '<li></li>';
    $('.bullets').html(html);
  }
  var  bullets = $('.slider-box .bullets li')
  $('.slider-box .bullets li:first').addClass('active');  
  $('.slider img:last').clone().prependTo('.slider');
  $('.slider img').eq(1).clone().appendTo('.slider');
  $('.slider').css('margin-left', -slideWidth);
  function nextSlide(){
    interval = window.setInterval(animate, sliderInterval);
  }
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth  && course==1){
      slider.css({'marginLeft':-slideWidth});
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{ 
      margin = margin - slideWidth*(course);
    }  slider.animate({'marginLeft':margin},animateTime);
    if (clickBullets==0){
    bulletsActive(); 
  }else{ 
    slideNum=index+1; 
  }
  }
  function bulletsActive(){
    if (course==1 && slideNum!=slideCount){
    slideNum++; 
      $('.bullets .active').removeClass('active').next('li').addClass('active');
  }else if (course==1 && slideNum==slideCount){ 
    slideNum=1;
    $('.bullets li').removeClass('active').eq(0).addClass('active');
    return false;
  }else if (course==-1  && slideNum!=1){
    slideNum--;                               
      $('.bullets .active').removeClass('active').prev('li').addClass('active');
    return false;  
  }else if (course==-1  && slideNum==1){
    slideNum=slideCount; 
    $('.bullets li').removeClass('active').eq(slideCount-1).addClass('active');
  }
  }
  function sliderStop(){   
    window.clearInterval(interval);
  }
  prev.click(function() {  
    if (slider.is(':animated')) { return false; }       
    var course2 = course;  
    course = -1;   
    animate();   
    course = course2 ;  
  });
  next.click(function() {   
    if (slider.is(':animated')) { return false; }       
    var course2 = course;  
    course = 1;   
    animate();   
    course = course2 ;     
  });
  bullets.click(function() {   
    if (slider.is(':animated')) { return false; }      
  sliderStop();      
  index = bullets.index(this);  
  if (course==1){       
    margin=-slideWidth*index;  
  }else if (course==-1){  
    margin=-slideWidth*index-2*slideWidth;
  }
  $('.bullets li').removeClass('active').eq(index).addClass('active');  
  clickBullets=1;  
  animate();
  clickBullets=0;
  });
  slider.add(next).add(prev).hover(function() {
    sliderStop();    
  }, nextSlide);    
  nextSlide();    
});

var arr=[
{
	name:'',
	user:'',
	date:''
}];


app.controller('chatCtrl', function($scope){
$scope.arres=arr;
	$(".sendButton").on('click', function(){
		arr.push({
			name: $(".inputText").val(),
			user: $(".us").val(),
			date: new Date()
		})
		
		$scope.$apply();
	})
});

var arrq=[
{
	name:'',
	user:'',
	date:''
}];

app.controller('chat2Ctrl', function($scope){
$scope.arres=arrq;
	$(".sendButton2").on('click', function(){
		arrq.push({
			name: $(".inputText2").val(),
			user: $(".us2").val(),
			date: new Date()
			
		})
		$('.icon').css({
        display: "block"
    });
		$('.send').animate({
        marginLeft: "-26%"
    });
		$scope.$apply();
		
	})
});
app.directive("slide", function() {
    return {
        templateUrl : "slide.html"
    };
});
app.directive("auto", function() {
    return {
        templateUrl : "auto.html"
    };
});
app.directive("prod", function() {
    return {
        templateUrl : "prod.html"
    };
});

app.directive("products", function() {
    return {
        templateUrl : "products.html"
    };
});
app.directive("chatik", function() {
    return {
        templateUrl : "chatik.html"
    };
});

$(".icon").on('click', function(){
		$('.icon').css({
        display: "none"
    });
	$('.send').animate({
        marginLeft: "30px"
    });
		});
