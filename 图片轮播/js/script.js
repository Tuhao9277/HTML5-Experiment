
/*
使用onmouseover，onmouseout实现轮播和图片停留
*/

//将document.getElementById方法封装一下，简化代码
function byId(id) {
	return typeof(id) === "string" ? document.getElementById(id):id;
}
//全局变量
	var index = 0,
		timer = null,
		dots = byId("dots").getElementsByTagName("span"),
		pics = byId("banner").getElementsByTagName('div'),
		prev = byId("prev"),
		next = byId("next"),
		menu = byId("menu-content"),
		menuItems = menu.getElementsByClassName("menu-item"),
		subMenu = byId("sub-menu"),
		innerBox = subMenu.getElementsByClassName("inner-box"),
		len = pics.length;
		

	function slideImg(){
		var main = byId("main");

		//划过清除定时器，离开继续
		main.onmouseover = function(){
			//划过清除定时器
			if (timer) 
				clearInterval(timer);
			
		}
		main.onmouseout = function(){
			timer = setInterval(function (){
			index++;
			if (index >=len) 
				index = 0;
			
			changeImg();
			},3000);
		}
		//在main上自动触发mouseout事件
		main.onmouseout();
		
		//遍历所有点击且绑定事件，点击原点切换图片
		for (var d = 0; d < len; d++) {
			
			dots[d].id = d;
			dots[d].onclick = function(){
				//改变index为当前span的id值
				index = this.id;
				//改变之后，调用changeImg方法

				changeImg();
				//index = dots[d];
				//console.log(d);
				//function方法会改变作用域，此时d的值将会永远置为最终值3
			}
		//导航菜单
		//遍历主菜单，且绑定事件
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].setAttribute("data-index",i);
			
			menuItems[i].onmouseover = function(){
				//每一个menu-item 对应定义一个data-index 属性，作为索引
				var idx = this.getAttribute("data-index");
				subMenu.className="sub-menu";
				//遍历所有子菜单，将每一个都隐藏
				for (var j = 0; j < innerBox.length; j++) {
					innerBox[j].style.display="none";
					menuItems[j].style.background = 'none';
				}

				menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
				
				innerBox[idx].style.display="block";
			}
			menuItems[i].onmouseout = function(){
				var idx = this.getAttribute("data-index");
			menuItems[idx].style.background = 'none';
		}

		}
		menu.onmouseout = function(){
				subMenu.className="sub-menu hide";
		}
		subMenu.onmouseover = function(){
			this.className="sub-menu";
		}
		subMenu.onmouseout = function(){
			this.className = "sub-menu hide";
		}

	}

	//
	next.onclick = function(){
		index++;
		if (index>=len) {index = 0}
		changeImg();
	}
	prev.onclick = function(){
		index--;
		if (index<0) {index = len-1}
		changeImg();
	}

	}

	/*图片切换*/
	function changeImg(){
		//遍历banner下所有的div,将其都隐藏，
		//
		for (var i = 0; i < len; i++) {
			pics[i].style.display = 'none';
			dots[i].className= "";
		}
		//根据index，显示当前图片
		pics[index].style.display="block";
		dots[index].className = "active";
	}
slideImg();