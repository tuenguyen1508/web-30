$(document).ready(function($){
	var	text =$('#myText');
	console.log(text.parent());//lấy cha trực tiếp
	console.log(text.parents());//lấy cả selector cha
	console.log(text.parents('body'));//lấy selector ha theo filter
	console.log(text.parentsUntil('body'));//lây tất cả selector cha theo filter
	
	var	myDiv =$('.container');
	console.log(myDiv.find('.myText'));
	console.log(myDiv.children());
	
	console.log(text.next());//text 2
	console.log($('#myText-2').prev());//text 1 
	console.log($('#myText-2').siblings());//tất cả ae cùng cấp 
	console.log($('#myText-2').siblings('a'));//lọc theo thẻ a 

	console.log($('p').first());
	console.log($('p').last());
	console.log($('p').eq(2));

	console.log($('#myText-2').siblings().first());
	console.log($('#myText-2').siblings().filter('p'));
	console.log($('#myText-2').siblings().not('p'));

	$('.myDiv').hide();
	$('.myDiv2').show();

	$('#btn-click').on('click', function(){
		$('.myDiv').toggle(4000, function(){
			$('.myDiv2').toggle(4000, function(){
				alert('Xong roi!');
			});
		});
	});

	$('.myDiv').fadeIn(3000);// hiển thị đậm dần trong 3s
	$('.myDiv2').fadeOut(3000);// hiển thị mờ dẫn trong 3s
	$('.myDiv2').fadeTo(3000, 0.6);// thay đổi độ mờ xuống 0.6 trong 3s
	
	$('.myDiv2').slideUp(3000);//hiển thị bằng cách tăng height
	$('.myDiv').slideDown(3000);//ẩn đi bằng cách giảm height






});


