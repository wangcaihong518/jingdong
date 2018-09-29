window.onload=function (){
	var close=document.getElementsByClassName("icon-cuohao-")[0];
	var input=document.getElementById("input");
	
	close.onclick=function (){
	document.getElementsByClassName("header")[0].style.display="none";
	}
	input.onfocus=function(){
		input.placeholder=" ";
	}
	var slide=document.documentElement.scrollTop;

	if(slide>='200'){
		var ss=document.getElementsByClassName("slide")[0];
		ss.style.display="block";
	}
// 头部搜索
	window.onscroll=function(){
		let header_search=document.querySelector(".header_search");
		let body_top=document.body.scrollTop || document.documentElement.scrollTop;
			if(body_top>=668){
				header_search.style.top=0;
				toTop.style.right="0";
				toTop.style.bottom="0";
				slide_nav.style.bottom="0"
				slide_nav.style.right="0";
			}else if(body_top<668){
				header_search.style.top="-48px";
				toTop.style.right="-20px";
				toTop.style.bottom="-40px";
				slide_nav.style.bottom="-20px"
				slide_nav.style.right="-40px";
			}
	}
// 头部二级菜单
	// 我的京东
	let nav_inner_right_sub=document.querySelector(".myjd .nav_inner_right_sub");
	let sub_li = document.querySelector(".myjd");
	function show_sub_menu(nav_inner_right_sub,sub_li,n_i_r_active){
		sub_li.onmouseover=function(){
			nav_inner_right_sub.style.display = "block";
			sub_li.classList.add("n_i_r_active");
		}
		sub_li.onmouseout=function(){
			nav_inner_right_sub.style.display = "none";
			sub_li.classList.remove("n_i_r_active");
		}
	}
	show_sub_menu(nav_inner_right_sub,sub_li,"n_i_r_active");
	// 企业采购enterprise_purchase
	let enterprise_purchase=document.querySelector(".enterprise_purchase");
	let enterprise_purchase_sub=document.querySelector(".enterprise_purchase .nav_inner_right_sub");
	show_sub_menu(enterprise_purchase_sub,enterprise_purchase,"n_i_r_active");
	let show_qrcode = document.querySelector(".show_qrcode");
	let J_mobile_pop = document.querySelector(".J_mobile_pop");
	show_qrcode.onmouseover=function(){
		J_mobile_pop.style.display="block";
	}
	show_qrcode.onmouseout=function(){
		J_mobile_pop.style.display="none";
	}
	let qrcode = document.querySelector(".qrcode");
	qrcode.onmouseover=function(){
		J_mobile_pop.style.display="block";
	}
	qrcode.onmouseout=function(){
		J_mobile_pop.style.display="none";
	}
// 头部侧导航
	let slidebar_left_list=document.querySelectorAll(".slidebar_left > ul > li");
	let slidebar_left_subs=document.querySelectorAll(".slidebar_left_sub");
	for(let i=0;i<slidebar_left_list.length;i++){
		slidebar_left_list[i].onmouseover=function(){
			for(let j=0;j<slidebar_left_subs.length;j++){
				slidebar_left_subs[j].style.display="none";
			}
			slidebar_left_subs[i].style.display="block";
		}
		slidebar_left_list[i].onmouseout=function(){
			slidebar_left_subs[i].style.display="none";
		}
	}
// banner部分
	let sliderbar_banner = document.querySelector(".sliderbar_banner");
	let banner_imgs = document.querySelectorAll(".sliderbar_banner img");
	let banner_bnts_l = document.querySelector(".banner_bnts_l");
	let banner_bnts_r = document.querySelector(".banner_bnts_r");
	let banner_dots = document.querySelectorAll(".banner_dots li");
	
	
	function banner2(sliderbar_banner,banner_imgs,banner_dots,banner_bnts_l,banner_bnts_r){
		let banner_num = 0;
		banner_imgs[0].style.opacity = 1;
		banner_dots[0].style.backgroundColor= "#FFF";
		let banner_t = setInterval(banner_change,2000);
		for(let i = 0;i < banner_dots.length;i ++){
			banner_dots[i].onmouseover = function(){
				for(let j=0;j<banner_imgs.length;j++){
					banner_imgs[j].style.opacity = 0;
					banner_dots[j].style.backgroundColor = "";
				}
				banner_imgs[i].style.opacity = 1;
				banner_dots[i].style.backgroundColor = "#FFF";
			}
			banner_dots[i].onmouseout = function(){
				banner_imgs[i].style.opacity = 0;
				banner_num = i;
			}
		}
		function banner_change(){
			banner_num++;
			if(banner_num==banner_imgs.length){
				banner_num=0;
			}
			for(let j=0;j<banner_imgs.length;j++){
				banner_imgs[j].style.opacity=0;
				banner_dots[j].style.backgroundColor="";
			}
			banner_imgs[banner_num].style.opacity="1";
			banner_dots[banner_num].style.backgroundColor="#FFF";

		}
		banner_bnts_l.onmouseover = function(){
			banner_bnts_l.style.backgroundColor="rgba(0,0,0,.5)"
		}
		banner_bnts_l.onmouseout = function(){
			banner_bnts_l.style.backgroundColor="rgba(0,0,0,.2)"
		}
		banner_bnts_r.onmouseover = function(){
			banner_bnts_r.style.backgroundColor="rgba(0,0,0,.5)"
		}
		banner_bnts_r.onmouseout = function(){
			banner_bnts_r.style.backgroundColor="rgba(0,0,0,.2)"
		}
		banner_bnts_l.onclick = function(){
			banner_num--;
			if(banner_num==-1){
				banner_num=banner_imgs.length-1;
			}
			for(let j=0;j<banner_imgs.length;j++){
				banner_imgs[j].style.opacity=0;
				banner_dots[j].style.backgroundColor="";
			}
			banner_imgs[banner_num].style.opacity=1;
			banner_dots[banner_num].style.backgroundColor="#FFF";

		}
		banner_bnts_r.onclick = function(){
			banner_change();
		}
		sliderbar_banner.onmouseover = function(){
			clearInterval(banner_t);
		}
		sliderbar_banner.onmouseout=function(){
			banner_t=setInterval(banner_change,2000);
		}
		window.onblur = function(){
			clearInterval(banner_t);
		}
		window.onfocus = function(){
			banner_t=setInterval(banner_change,2000);
		}
	}	
	banner2(sliderbar_banner,banner_imgs,banner_dots,banner_bnts_l,banner_bnts_r);
// 秒杀部分的banner
	function banner(banner1_pics,banner1_dots,banner1_width){
		let banner1_now = 0;
		let banner1_next = 0;
		banner1_pics[0].style.left = 0;
		banner1_dots[0].style.backgroundColor = "#E33333";
		for(let i = 0;i < banner1_dots.length;i ++){
			 banner1_dots[i].onmouseover=function(){
			 	for(let j = 0;j < banner1_pics.length;j ++){
			 		banner1_pics[j].style.left=banner1_width+"px";
			 		banner1_dots[j].style.backgroundColor="#C0C0C0";
			 	}
			 	banner1_pics[i].style.left="0";
			 	banner1_dots[i].style.backgroundColor="#E33333";
			 	banner1_now=i;
			 	banner1_next=i;
			 }
		}
		let banner1_t=setInterval(banner1_change,2000);
		function banner1_change(){
			banner1_next++;
			if(banner1_next==banner1_pics.length){
				banner1_next=0;
			}
			banner1_pics[banner1_now].style.left=0;
			banner1_pics[banner1_next].style.left=banner1_width+"px";
			animate(banner1_pics[banner1_now],{left:-banner1_width},function(){
				banner1_dots[banner1_now].style.backgroundColor="#E33333";
			});
			animate(banner1_pics[banner1_next],{left:0},function(){
				for(let j=0;j<banner1_pics.length;j++){
					banner1_dots[j].style.backgroundColor="#C0C0C0";
				}
				banner1_dots[banner1_next].style.backgroundColor="#E33333";
			});
			banner1_now=banner1_next;
		}
	}
	let banner1_pics = document.querySelectorAll(".banner .banner_box img");
	let banner1_dots =  document.querySelectorAll(".banner_box .banner1_btns .banner1_dots");
	let banner1 = document.querySelector(".banner .banner_box");
	let banner1_width = parseInt(getComputedStyle(banner1,null).width);
	banner(banner1_pics,banner1_dots,banner1_width);
	// 秒杀中的banner图
	let btns_l = document.querySelectorAll(".miaosha_banner .banner_bnts")[0];
	let btns_r = document.querySelectorAll(".miaosha_banner .banner_bnts")[1];
	let miaosha_banner = document.querySelector(".miaosha_banner");
	let miaosha_banner_width = parseInt(getComputedStyle(miaosha_banner,null).width);
	let miaosha_banner_ul = document.querySelectorAll(".miaosha_banner ul");
	let miaosha_now =0;
	let miaosha_next=0;
	let miaosha_flag=true;
	miaosha_banner_ul[0].style.left=0;
	btns_r.onclick=function(){
		if(!miaosha_flag){
			return;
		}
		miaosha_flag=false;
		miaosha_next++;
		if(miaosha_next==miaosha_banner_ul.length){
			miaosha_next=0;
		}
		miaosha_banner_ul[miaosha_now].style.left=0;
		miaosha_banner_ul[miaosha_next].style.left=miaosha_banner_width+"px";
		animate(miaosha_banner_ul[miaosha_now],{left:-miaosha_banner_width},function(){
			miaosha_flag=true;
		});
		animate(miaosha_banner_ul[miaosha_next],{left:0},function(){
			miaosha_flag=true;
		});
	};
	btns_l.onclick=function(){
		if(!miaosha_flag){
			return;
		}
		miaosha_flag=false;
		miaosha_next--;
		if(miaosha_next==-1){
			miaosha_next=miaosha_banner_ul.length-1;
		}
		miaosha_banner_ul[miaosha_now].style.left=0;
		miaosha_banner_ul[miaosha_next].style.left=-miaosha_banner_width+"px";
		animate(miaosha_banner_ul[miaosha_now],{left:miaosha_banner_width},function(){
			miaosha_flag=true;
		});
		animate(miaosha_banner_ul[miaosha_next],{left:0},function(){
			miaosha_flag=true;
		});
	};
// 侧边广告图
	let slidebar_adv_img = document.querySelectorAll(".slidebar .slidebar_adv img")[1];
	let slidebar_adv = document.querySelector(".slidebar .slidebar_adv");
	slidebar_adv.onmouseover = function(){
		slidebar_adv_img.style.width ="790px";
	}
	slidebar_adv.onmouseout = function(){
		slidebar_adv_img.style.width = "0";
	}	
// 排行榜中间
	let mm=document.querySelector(".mm");
	let mm_banner =document.querySelector(".mm_banner");
	let mm_banner_width=parseInt(getComputedStyle(mm_banner,null).width);
	let mm_wrap=document.querySelectorAll(".mm_wrap");
	let mm_bnts_l=document.querySelectorAll(".mm_bnts")[0];
	let mm_bnts_r=document.querySelectorAll(".mm_bnts")[1];
	let mm_btns=document.querySelectorAll(".mm_btns li");

	mm_btns[0].style.backgroundColor="green";
	mm_wrap[0].style.left=0;
	for(let i =0;i<mm_btns.length;i++){
		mm_btns[i].onmouseover=function(){
			for(let j=0;j<mm_btns.length;j++){
				mm_wrap[j].style.left=mm_banner_width+"px";
				mm_btns[j].style.backgroundColor="rgb(192,192,192)";
			}
			mm_wrap[i].style.left=0;
			mm_btns[i].style.backgroundColor="green";
			mm_now=i;
			mm_next=i;
		}
	}
	let mm_now=0;
	let mm_next=0;
	// let mm_flag=true;
	let mm_t=setInterval(mm_change,2000);
	function mm_change(){
		mm_next++;
		if(mm_next==3){
			mm_next=0;
		}
		// mm_wrap[mm_now].style.left=0;
		mm_wrap[mm_next].style.left=350+"px";
		animate(mm_wrap[mm_now],{left:-350},function(){
			// mm_btns[mm_now].style.backgroundColor="green";
			// mm_flag=true;
		});
		animate(mm_wrap[mm_next],{left:0},function(){
			// for(let j=0;j<mm_btns.lenth;j++){
			// 	mm_btns[j].style.backgroundColor="rgb(192,192,192)";
			// }
			// mm_btns[mm_next].style.backgroundColor="green";
			// mm_flag=true;
		});
		mm_now=mm_next;
	}
	// mm_bnts_l.onclick=function(){
	// 	if(!mm_flag){
	// 		return;
	// 	}
	// 	mm_flag=false;
	// 	mm_next--;
	// 	if(mm_next==-1){
	// 		mm_next=mm_wrap-1;
	// 	}
	// 	mm_wrap[mm_now].style.left=0;
	// 	mm_wrap[mm_next].style.left=-mm_banner_width+"px";
	// 	animate(mm_wrap[mm_now],{left:mm_banner_width},function(){
	// 		mm_btns[mm_now].style.backgroundColor="green";
	// 		mm_flag=true;
	// 	});
	// 	animate(mm_wrap[mm_next],{left:0},function(){
	// 		for(let j=0;j<mm_btns.lenth;j++){
	// 			mm_btns[j].style.backgroundColor="rgb(192,192,192)";
	// 		}
	// 		mm_btns[mm_next].style.backgroundColor="rgb(192,192,192)";
	// 		mm_flag=true;
	// 	});
	// }
	// mm_bnts_r.onclick=function(){
	// 	if(!mm_flag){
	// 		return;
	// 	}
	// 	flag=false;
	// 	mm_change();
	// }
	// mm.onmouseover=function(){
	// 	clearInterval(mm_t);
	// }
	// mm.onmouseout=function(){
	// 	mm_t=setInterval(mm_change,2000);
	// }
	// window.onblur=function(){
	// 	clearInterval(mm_t);
	// }
	// window.onfocus=function(){
	// 	mm_t=setInterval(mm_change,2000);
	// }
// 排行榜右边
	// let zx_bottom=document.querySelector(".zx_bottom");
	let zx_wrap_pre=document.querySelector(".zx_wrap_pre");
	let zx_bottom_width=parseInt(getComputedStyle(zx_wrap_pre,null).width)/2;
	// let zx_bottom_wrap=document.querySelectorAll(".zx_bottom_wrap");
	let zz_btns=document.querySelectorAll(".zz_btns li");

	function translate(zx_wrap_pre,zz_btns,zx_bottom_width){
		let zz_num=0;
		zz_btns[0].onmouseover=function(){
			zz_num --;
			if(zz_num == -1){
				zz_num = 0;
				return;
			}
			
			zx_wrap_pre.style.transform="translateX("+(-zx_bottom_width*zz_num)+"px)";
			zz_btns[0].style.backgroundColor="red";
			zz_btns[1].style.backgroundColor="orange";

		}
		zz_btns[1].onmouseover = function(){
			zz_num ++;
			if(zz_num == zz_btns.length){
				zz_num = zz_btns.length-1;
				return;
			}
			zx_wrap_pre.style.transform="translateX("+(-zx_bottom_width*zz_num)+"px)";
			zz_btns[1].style.backgroundColor="red";
			zz_btns[0].style.backgroundColor="orange";
		}
	}
	translate(zx_wrap_pre,zz_btns,zx_bottom_width);
	// 排行榜的轮播图左
		let phb_dots=document.querySelectorAll(".phb_dots li.phb_btn");
		console.log(phb_dots);
		let phb_wrap=document.querySelector(".phb_wrap_pre .phb_wrapper");
		console.log(phb_wrap);
		let phb_wrap_width=parseInt(getComputedStyle(phb_wrap,null).width)/2;
		console.log(phb_wrap_width);
		translate(phb_wrap,phb_dots,phb_wrap_width);
	// 函数
		// function banner_handle(banner1_pics,banner1_dots,banner1_width){
		// 	let banner1_now = 0;
		// 	let banner1_next = 0;
		// 	banner1_pics[0].style.left = 0;
		// 	banner1_dots[0].style.backgroundColor = "#E33333";
		// 	for(let i = 0;i < banner1_dots.length;i ++){
		// 		 banner1_dots[i].onmouseover=function(){
		// 		 	for(let j = 0;j < banner1_pics.length;j ++){
		// 		 		banner1_pics[j].style.left=banner1_width+"px";
		// 		 		banner1_dots[j].style.backgroundColor="#C0C0C0";
		// 		 	}
		// 		 	banner1_pics[i].style.left="0";
		// 		 	banner1_dots[i].style.backgroundColor="#E33333";
		// 		 	banner1_now=i;
		// 		 	banner1_next=i;
		// 		 }
		// 	}
			// let banner1_t=setInterval(banner1_change,2000);
		// 	function banner1_change(){
		// 		banner1_next++;
		// 		if(banner1_next==banner1_pics.length){
		// 			banner1_next=0;
		// 		}
		// 		banner1_pics[banner1_now].style.left=0;
		// 		banner1_pics[banner1_next].style.left=banner1_width+"px";
		// 		animate(banner1_pics[banner1_now],{left:-banner1_width},function(){
		// 			banner1_dots[banner1_now].style.backgroundColor="#E33333";
		// 		});
		// 		animate(banner1_pics[banner1_next],{left:0},function(){
		// 			for(let j=0;j<banner1_pics.length;j++){
		// 				banner1_dots[j].style.backgroundColor="#C0C0C0";
		// 			}
		// 			banner1_dots[banner1_next].style.backgroundColor="#E33333";
		// 		});
		// 		banner1_now=banner1_next;
		// 	}
		// }
		// banner_handle(phb_wrap,phb_btns,phb_wrap_width);
// slide
	let slide_nav=document.querySelector(".slide");
	let slide_ul_li = document.querySelectorAll(".slide ul li");
	console.log(slide_ul_li);
	let slide_show = document.querySelectorAll(".slide_show");
	console.log(slide_show);
	let toTop=document.querySelector(".toTop");
	let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
	toTop.onclick=function(){
		bodyTop=0;
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
	function show_hidden(slide_ul_li,slide_show){
		for(let i=0;i<slide_show.length;i++){
			slide_ul_li[i].onmouseover=function(){
				for(let j=0;j<slide_show.lenth;j++){
					slide_show[j].style.right="-81px";
				}
				slide_show[i].style.right="0";
			}
			slide_ul_li[i].onmouseout=function(){
				slide_show[i].style.right="-81px";
			}
		}
	}
	show_hidden(slide_ul_li,slide_show);
// 特色推荐
	let special_recommend_wrapper = document.querySelector(".special_recommend");
	let wrapper_width = parseInt(getComputedStyle(special_recommend_wrapper,null).width);
	let special_recommend=document.querySelectorAll(".special_recommend ul");
	let special_recommend_dots=document.querySelectorAll(".special_recommend_dots li");
	console.log(special_recommend_dots);
	let special_recommend_btns_l = document.querySelector(".special_recommend .banner_bnts_l");
	let special_recommend_btns_r = document.querySelector(".special_recommend .banner_bnts_r"); 
	// my_banner(special_recommend_wrapper,special_recommend,special_recommend_dots,special_recommend_btns_l,special_recommend_btns_r,wrapper_width);
	let recommend_now=0;
	let recommend_next=0;
	let recommend_flag=true;
	special_recommend[0].style.left=0;
	special_recommend_dots[0].classList.add("recommend_active");
	for(let i=0;i<special_recommend_dots.length;i++){
		special_recommend_dots[i].onmouseover=function(){
			for(let j=0;j<special_recommend_dots.length;j++){
				special_recommend[j].style.left="1190px";
				special_recommend_dots[j].classList.remove("recommend_active");
			}
			special_recommend[i].style.left=0;
			special_recommend_dots[i].classList.add("recommend_active");
			recommend_now=i;
			recommend_next=i;
		}
	}
	let recommend_t=setInterval(recommend,2000);
	function recommend(){
		recommend_next++;
		if(recommend_next==special_recommend_dots.length){
			recommend_next=0;
		}
		special_recommend[recommend_now].style.left=0;
		special_recommend[recommend_next].style.left=wrapper_width+"px";
		animate(special_recommend[recommend_now],{left:-wrapper_width},function(){
			special_recommend_dots[recommend_now].classList.add("recommend_active");
			recommend_flag=true;
		});
		animate(special_recommend[recommend_next],{left:0},function(){
			for(let j=0;j<special_recommend_dots.length;j++){
				special_recommend_dots[j].classList.remove("recommend_active");
			}
			special_recommend_dots[recommend_next].classList.add("recommend_active");
			recommend_flag=true;
		});
		recommend_now=recommend_next;
	}
	special_recommend_btns_l.onclick=function(){
		if(!recommend_flag){
			return;
		}
		recommend_flag=false;
		recommend_next--;
		if(recommend_next==-1){
			recommend_next=special_recommend.length-1;
		}
		special_recommend[recommend_now].style.left=0;
		special_recommend[recommend_next].style.left=-wrapper_width+"px";
		animate(special_recommend[recommend_now],{left:wrapper_width},function(){
			special_recommend_dots[recommend_now].classList.add("recommend_active");
		});
		animate(special_recommend[recommend_next],{left:0},function(){
			for(let j=0;j<special_recommend_dots.length;j++){
				special_recommend_dots[j].classList.remove("recommend_active");
			}
			special_recommend_dots[recommend_next].classList.add("recommend_active");
			recommend_flag=true;
		});
		recommend_now=recommend_next;
	}
	special_recommend_btns_r.onclick=function(){
		if(!recommend_flag){
			return;
		}
		recommend_flag=false;
		recommend();
	}
	special_recommend_wrapper.onmouseover=function(){
		clearInterval(recommend_t);
	}
	special_recommend_wrapper.onmouseout=function(){
		recommend_t=setInterval(recommend,2000);
	}
	window.onblur=function(){
		clearInterval(recommend_t);
	}
	window.onfocus=function(){
		recommend_t=setInterval(recommend,2000);
	}
// 按需加载
	
}

