window.onload=function(){
	var items=document.getElementsByClassName("item");
	var circles=document.getElementsByClassName("circle");
	var leftBtn=document.getElementById("btn-left");
	var rightBtn=document.getElementById("btn-right");
	var left=document.querySelector('.left');
	var index=0;
	var timer=null;
	
    function initCarousel() {
        move();
        startCarousel();
    }
	
	var clearclass=function(){
		for(let i=0;i<items.length;i++){
			items[i].className="item";
			circles[i].className="circle";
			circles[i].setAttribute("num",i);
		}
	}

	function move(){
		clearclass();
		items[index].className="item active";
		circles[index].className="circle white";
	}

	rightBtn.onclick=function(){
		if(index<items.length-1){
			index++;
		}
		else{
			index=0;
		}
		move();
	}

	leftBtn.onclick=function(){
		if(index<items.length){
			index--;
		}
		else{
			index=items.length-1;
		}
		move();
	}

	timer=setInterval(function(){
		rightBtn.onclick();
	},3000)

	for(var i=0;i<circles.length;i++){
		circles[i].addEventListener("click",function(){
			var point_index=this.getAttribute("num");
			index=point_index;
			move();
		})
	
	}

	left.onmouseover=function(){
		clearInterval(timer);
			timer=setInterval(function(){
				rightBtn.onclick();
			},6000)
	}

	left.onmouseleave=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			rightBtn.onclick();
		},3000)
	}
	
	initCarousel();
}
