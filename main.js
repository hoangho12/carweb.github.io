const sr = ScrollReveal({
	origin:'left',
	distance:'60px',
	duration: 2500,
	delay:200,
})

sr.reveal('.home_title')
sr.reveal('.home_sub', {delay:300})
sr.reveal('.home-content-h3')
sr.reveal('.home-content-h2',{delay:400, origin:"bottom"})
sr.reveal('.home-content-a',{delay:500})
sr.reveal('.col-services',{delay:800, distance:'0', origin:'top'})
sr.reveal('.row-overview',{delay:300, origin:'top'})
window.addEventListener('scroll',reveal);

		function reveal(){
			var reveals = document.querySelectorAll('.reveal');

			for(var i=0 ; i<reveals.length;i++){
				var windowheight = window.innerHeight;
				var revealtop = reveals[i].getBoundingClientRect().top;
				var revealpoint = 150;

				if(revealtop < windowheight - revealpoint){
					reveals[i].classList.add('active');
				}else{
					reveals[i].classList.remove('active');
				}
			}
		}



	
		$(document).on('click','.deal-link',function(){
			$(this).addClass('imgactive').siblings().removeClass('imgactive')
		})

		const icons = document.querySelector('.icon-search');
		const search=document.querySelector('.search');
		const dealer = document.querySelector('.deal-link');
		const furniture = document.querySelector('.furniture-btn');
		const furnitureimg = document.querySelector('.furniture-img');
		const frontbtn =document.querySelector('.front-btn');
		const frontimg = document.querySelector('.front-img');
		const backbtn =document.querySelector('.back-btn');
		const backimg = document.querySelector('.back-img');
		const leftbtn =document.querySelector('.left-btn');
		const leftimg = document.querySelector('.left-img');

		// list-car
		const listcars01 = document.querySelector('.list-cars-01')
		const listcars02 = document.querySelector('.list-cars-02')
		const listcars03 = document.querySelector('.list-cars-03')
		const listcars04 = document.querySelector('.list-cars-04')
		const listcars05 = document.querySelector('.list-cars-05')
		const listcarsimg01 = document.querySelector('.list-cars-img-01')
		const listcarsimg02 = document.querySelector('.list-cars-img-02')
		const listcarsimg03 = document.querySelector('.list-cars-img-03')
		const listcarsimg04 = document.querySelector('.list-cars-img-04')
		const listcarsimg05 = document.querySelector('.list-cars-img-05')


		listcars01.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg01).addClass('active-list-img').siblings().removeClass('active-list-img')
			// listcarsimg01.classList.toggle('active-list-img')
		}
		listcars02.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg02).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars03.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg03).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars04.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg04).addClass('active-list-img').siblings().removeClass('active-list-img')
		}
		listcars05.onclick=function(){
			$(this).addClass('active-choose').siblings().removeClass('active-choose')
			// listcars01.classList.toggle('active-choose')
			$(listcarsimg05).addClass('active-list-img').siblings().removeClass('active-list-img')
		}

		// overview
		furniture.onclick=function(){
			furnitureimg.classList.toggle('active-furniture-img')
		}
		frontbtn.onclick=function(){
			frontimg.classList.toggle('active-furniture-img')
		}
		backbtn.onclick=function(){
			backimg.classList.toggle('active-furniture-img')
		}
		leftbtn.onclick=function(){
			leftimg.classList.toggle('active-furniture-img')
		}



		icons.onclick = function(){
			search.classList.toggle('active')
		}

		const financedrop = document.querySelector('.financedrop');
		financedrop.onclick = function(){
			financedrop.classList.toggle('dropactive');
		}


// search car
const searchcar = ()=>{
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("row-car")
	const product  = document.querySelectorAll(".col-cars")
	const pname = storeitems.getElementsByTagName("h4")

	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h4')[0];

		if (match) {
			let textValue = match.textContent || match.innerHTML

			if (textValue.toUpperCase().indexOf(searchbox) > -1) {
				product[i].style.display = "";
			}else{
				product[i].style.display = "none";
			}
		}
	}
}