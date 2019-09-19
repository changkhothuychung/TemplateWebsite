document.addEventListener('DOMContentLoaded', function(){
	var nut = document.querySelectorAll('.chuyenslide ul li'); 
	var slides = document.querySelectorAll('.cacslide ul li'); 
	var thoigian = setInterval(function(){autoSlide()},4000);
	for (var i = 0 ; i < nut.length ; i++){
		nut[i].addEventListener('click',function(){
			clearInterval(thoigian);
			for(var i = 0 ; i <nut.length ; i++){
				nut[i].classList.remove('active'); 

			}
			this.classList.add('active'); 
			//xu ly tinh vi tri 
			console.log(this.previousElementSibling);
			var nutkichhoat = this ; 
			var vitrinut = 0 ; 
			for(vitrinut= 0 ;nutkichhoat= nutkichhoat.previousElementSibling ; vitrinut++){}
			//het vong lap nay thi bien i = so thu tu ; 
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('hienthi'); 
				slides[vitrinut].classList.add('hienthi'); 
			}
		});
	}
	
	//viet ham tu chuyen silde
	function autoSlide(){
		
			var vitrislide = 0 ; 
			var slideHienTai = document.querySelector('.cacslide ul li.hienthi');
			for(vitrislide = 0 ; slideHienTai =slideHienTai.previousElementSibling ; vitrislide++ ){}
				if(vitrislide < slides.length - 1 ){
						for(var i = 0 ; i<slides.length; i++){
						slides[i].classList.remove('hienthi');
						nut[i].classList.remove('active');
					}
					slides[vitrislide].nextElementSibling.classList.add('hienthi');
					nut[vitrislide].nextElementSibling.classList.add('active');
				}
				else {
						for(var i = 0 ; i<slides.length; i++){
						slides[i].classList.remove('hienthi');
						nut[i].classList.remove('active');
					}
					slides[0].classList.add('hienthi');
					nut[0].classList.add('active');
				}
			
		
	}
	
});
