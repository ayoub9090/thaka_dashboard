$(function () {

	$('[data-toggle="tooltip"]').tooltip(); 

	activateNotificationAndTasksScroll();

	setSkinListHeightAndScroll(true);
	setSettingListHeightAndScroll(true);

	$('.modules_list > li.singleIcons').matchHeight();
	setModulesListHeightAndScroll(true);
	setMenuListHeightAndScroll(true);

	$(window).resize(function () {
		setSkinListHeightAndScroll(false);
		setSettingListHeightAndScroll(false);
		setModulesListHeightAndScroll(false);
		setMenuListHeightAndScroll(false);
	});

    //calling selectpicker 
    $('.selectpicker').selectpicker();
    applyInputMAsk();


});



//Skin tab content set height and show scroll
function setSkinListHeightAndScroll(isFirstTime) {
	var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
	var $el = $('.demo-choose-skin');

	if (!isFirstTime){
		$el.slimScroll({ destroy: true }).height('auto');
		$el.parent().find('.slimScrollBar, .slimScrollRail').remove();
	}

	$el.slimscroll({
		height: height + 'px',
		color: 'rgba(0,0,0,0.5)',
		size: '6px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}

//Setting tab content set height and show scroll
function setSettingListHeightAndScroll(isFirstTime) {
	var height = $(window).height() - ($('.navbar').innerHeight() + $('.right-sidebar .nav-tabs').outerHeight());
	var $el = $('.right-sidebar .demo-settings');

	if (!isFirstTime){
		$el.slimScroll({ destroy: true }).height('auto');
		$el.parent().find('.slimScrollBar, .slimScrollRail').remove();
	}

	$el.slimscroll({
		height: height + 'px',
		color: 'rgba(0,0,0,0.5)',
		size: '6px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}

//Modules tab content set height and show scroll
function setModulesListHeightAndScroll(isFirstTime) {
	var height = $(window).height() - ($('.navbar').innerHeight());
	var $el = $('.modules_list');

	if (!isFirstTime){
		$el.slimScroll({ destroy: true }).height('auto');
		$el.parent().find('.slimScrollBar, .slimScrollRail').remove();
	}

	$el.slimscroll({
		height: height + 'px',
		color: 'rgba(0,0,0,0.5)',
		size: '6px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}

function setMenuListHeightAndScroll(isFirstTime){
	var height = $(window).height() - ($('.navbar').innerHeight());
	var $el = $('.sidebar .menu');

	if (!isFirstTime){
		$el.slimScroll({ destroy: true }).height('auto');
		$el.parent().find('.slimScrollBar, .slimScrollRail').remove();
	}

	$el.slimscroll({
		height: height + 'px',
		color: 'rgba(0,0,0,0.5)',
		size: '6px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}

function setMenuListHeightAndScroll(isFirstTime){
	var height = $(window).height() - ($('.navbar').innerHeight());
	var $el = $('.sidebar .menu ul');

	if (!isFirstTime){
		$el.slimScroll({ destroy: true }).height('auto');
		$el.parent().find('.slimScrollBar, .slimScrollRail').remove();
	}

	$el.slimscroll({
		height: height + 'px',
		color: 'rgba(0,0,0,0.5)',
		size: '6px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}



//Activate notification and task dropdown on top right menu
function activateNotificationAndTasksScroll() {
	$('.navbar-right .dropdown-menu .body .menu').slimscroll({
		height: '254px',
		color: 'rgba(0,0,0,0.5)',
		size: '4px',
		alwaysVisible: false,
		borderRadius: '0',
		railBorderRadius: '0'
	});
}





function doAnimate(animationType,element,openClass) {
	$(element).addClass(animationType + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).addClass(openClass);
		$(this).removeClass(animationType);
		$(this).removeClass('animated');
	});
};
var isToggledSidebar = true;/*was false ayoub*/
function toggleBarsMenu(){
	$('.toggleBarsMenu__link').css('pointer-events','none');
	if(!isToggledSidebar){
		$('#leftsidebar').css('width','70px');
		$('section.Maincontent').css('margin-left','85px');

    //$('.sidebar .menu').css({'left':'-144px','z-index':"-1"});
    setTimeout(function(){
    	$('.toggleBarsMenu__link').css('pointer-events','auto');
    },500);
    isToggledSidebar = true;
}else{
	$('#leftsidebar').css('width','245px');
	$('section.Maincontent').css('margin-left','262px');
    //$('.sidebar .menu').css('left','71px');/*was 78 ayoub*/
    setTimeout(function(){
    	$('.toggleBarsMenu__link').css('pointer-events','auto');
    	$('.sidebar .menu').css('z-index','0');

    },500);

    isToggledSidebar = false;
}
}
//========================================================================================================

function applyInputMAsk(){
  //  $('input[data-type="date"]').mask('00/00/0000');
    //Masked Input ============================================================================================================================
    var $demoMaskedInput = $('form');

    //Date
    $demoMaskedInput.find('input[data-input-type="date"]').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

    //Time
    $demoMaskedInput.find('input[data-input-type="time12"]').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
    $demoMaskedInput.find('input[data-input-type="time24"]').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

    //Date Time
    $demoMaskedInput.find('input[data-input-type="datetime"]').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: "datetime", hourFormat: '24' });

    //Mobile Phone Number
    $demoMaskedInput.find('input[data-input-type="mobile-phone-number"]').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
    //Phone Number
    $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

    //Dollar Money
    $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
    //Euro Money
    $demoMaskedInput.find('.money-euro').inputmask('99,99 €', { placeholder: '__,__ €' });

    //IP Address
    $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

    //Credit Card
    $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

    //Email
    $demoMaskedInput.find('.email').inputmask({ alias: "email" });

    //Serial Key
    $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
    //===========================================================================================================================================
}

//===============================================//
//MultiValues input
$(document).on('click','i.multivalueInput',function(){
   // #parentGroup = $(this).parents('.form-group');
   // $(this).parent('.form-line').clone();

    //$newInput = `
   // <div class="form-line--appended">
     //   <input multivalue="2" type="text" class="form-control" name="mobileNumber" placeholder="##### ####">
     //   <i title="Add" class="multivalueInput--remove">-</i>
    // </div>
   // `;
   // #parentGroup.append();

});




//functions for demos or can be used for development
//
//
//
//
$(document).on('click','.subsections-main-list li:not(".active") a[data-expand]',function(){
    //changeHeaderMenuList(this);
});

$(window).on('hashchange', function() {
	if($(".subsections-main-list").length > 0 && location.hash != ""){
		changeHeaderMenuList(location.hash.split('#')[1]);
	}
});

$(document).ready(function(){
	if($(".subsections-main-list").length > 0 && location.hash != ""){
		changeHeaderMenuList(location.hash.split('#')[1]);
	}


	$('.basic-multiple').select2();
	

});


function changeHeaderMenuList(el){

	if(true){
		$(".subsections-main-list li.active").removeClass('active');

		$object = $('.subsections-main-list li:not(".active") a[data-expand="'+ el +'"]')
		$parentSection = $($object).parent('li');
		$parentSection.addClass('active');
		$('.sections-content > section:visible').hide();
		$('section#' + el).fadeIn(400);

	}else{
		$(".subsections-main-list li.active").removeClass('active');
		$parentSection = $(el).parent('li');
		$parentSection.addClass('active');

		$sectionID = $(el).attr('data-expand');
		$('.sections-content > section:visible').fadeOut(300);

		$('section#' + $sectionID).fadeIn(600);
	}

}

//===============================================//
//Table forms handling the disabled states

$(document).on('change','.single-row-select',function(){
	return false;

	$('tr.adding-new-row').fadeOut(200);

	$parent = $(this).parents('tr');

  //change state of unselectedRow to disabled 
  $UnselectedRow = $parent.parents('table').find('tr.selected');
  $UnselectedRow.find('input:not(.single-row-select),select').attr('disabled','');
  $UnselectedRow.find('.bootstrap-select').addClass('disabled');
  $UnselectedRow.find('.bootstrap-select > button').addClass('disabled');

  $parent.parents('table').find('tr.selected').removeClass('selected');


  $parent.addClass('selected');


  //make choosen field enabled to submit 
  $parent.find('input,select,textarea').removeAttr('disabled');
  $parent.find('.bootstrap-select.disabled').removeClass('disabled');
  $parent.find('.bootstrap-select > button.disabled').removeClass('disabled');
  


})


//===============================================//
//#END# Table adding new row

$(document).on('click','a.add_table_row',function(){

	$(this).parents('.sectionForm').find('tr.adding-new-row').find('.single-row-select').click();
	$(this).parents('.sectionForm').find('tr.adding-new-row').fadeIn(200);

});

//===============================================//
//#END# Table adding new row




//===============================================//
//toggleSelectedMode on editable tables
$(document).on('click','.form-actions .btn-filter,.form-actions .btn-delete',function(){
	$('.search-container--advance').slideToggle(250);
});

function toggleSelectedMode(el){

	$this = $(el);
	$parent = $this.parents('tr');

	$parent.addClass('selected');

//Assign old values
$parent.find('input:not([type="checkbox"]),select,textarea').each(function(){
	$(this).attr('old-value',$(this).val());
});
$parent.find('input[type="checkbox"]').each(function(){
	$(this).attr('old-value',$(this).is(":checked"));
});
  //make choosen field enabled to submit 
  $parent.find('input,select,textarea').removeAttr('disabled');
  $parent.find('.bootstrap-select.disabled').removeClass('disabled');
  $parent.find('.bootstrap-select > button.disabled').removeClass('disabled');
  fixTextarea();
}


function closeSelectedMode(el){

	$this = $(el);
	$parent = $this.parents('tr');
	if(!$parent.hasClass('adding-new-row')){

//Return  old values
$parent.find('input:not([type="checkbox"]),select,textarea').each(function(){
	
	if($(this).hasClass("selectpicker")){
		$(this).val($(this).attr('old-value'));
		$(this).selectpicker('refresh');
	}
	else if($(this).hasClass('basic-multiple')) {
		$(this).val(null).trigger('change');
		var newVals = $(this).attr('old-value').split(',');
		var newVals1 = [];
		for(var i=0;i< newVals.length ;i++){
			newVals1.push(newVals[i]);
		}
		$(this).val(newVals1);
		$(this).trigger('change'); 
		
	}else{
		$(this).val($(this).attr('old-value'));
	}

});
$parent.find('input[type="checkbox"]').each(function(){
	if($(this).attr('old-value') == "true"){
		$(this).prop('checked', true); 
	}else{
		$(this).prop('checked', false); 
	}
});
fixTextarea();

}
 //change state of unselectedRow to disabled 
 if(!$parent.hasClass('adding-new-row')){

 	$parent.find('input:not(.single-row-select),select,textarea').attr('disabled','');
 	$parent.find('.bootstrap-select').addClass('disabled');
 	$parent.find('.bootstrap-select > button').addClass('disabled');

 	$parent.removeClass('selected');
 }
}



function closeAfterSave(el){

	$this = $(el);
	$parent = $this.parents('tr');

 //change state of unselectedRow to disabled 
 if(!$parent.hasClass('adding-new-row')){

 	$parent.find('input:not(.single-row-select),select,textarea').attr('disabled','');
 	$parent.find('.bootstrap-select').addClass('disabled');
 	$parent.find('.bootstrap-select > button').addClass('disabled');

 	$parent.removeClass('selected');
 }

 fixTextarea();
}

//===============================================//
//#END# toggleSelectedMode on editable tables

//===============================================//
//Upload avatar scripts

function uploadAvatar(){
	$('#avatarPhoto').click();
}

function removeAvatar(){
	$default = './assets/images/avatar.png';
	$('.avatarPreview > img').attr('src', $default);
}

function readURL(input) {

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			$('.avatarPreview > img').attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$("#avatarPhoto").change(function() {
	readURL(this);
});

$(window).on('load',function(){
	$('.bgloader').fadeOut(250);
});

$('form').on('submit',function(){
	var s = 0;

    if ($(this).valid()) {
        $('.bgloader').fadeIn(150);
        //event.preventDefault();

        //alert("Valid!");
    }
	//$('.bgloader').fadeIn(150);
	//setTimeout(function(){
	//	$('.bgloader').fadeOut(150);
	//},1200)
});

//Confirm modal business

var customCallback = "";
var modalConfirm = function(callback){

	$(".btn-confirm").on("click", function(){
		
		if($(this).attr('data-message-confirm') != ""){
			$('.modal-confirm').find('.message').html($(this).attr('data-message-confirm'));
		}
		if($(this).attr('data-confirm-callback') != ""){
			customCallback =  $(this).attr('data-confirm-callback');
		}
		$("#mi-modal").modal('show');

	});

	$("#modal-btn-si").on("click", function(){
		callback(true);
		$("#mi-modal").modal('hide');
	});

	$("#modal-btn-no").on("click", function(){
		callback(false);
		$("#mi-modal").modal('hide');
	});
};

modalConfirm(function(confirm){
	if(confirm){
    //Acciones si el usuario confirma
    if(customCallback == ""){
    	alert(confirmo);
    }else{
    	eval(customCallback);
    	customCallback = "";	
    }
    

}else{
    //Acciones si el usuario no confirma
    alert("NO CONFIRMADO");
    customCallback = "";
}
});

var holdOn = false;
function pophover_alert(type,msg,duration){
	if(!holdOn){
		holdOn = true;
		$('.pophover_alert .alert').addClass('alert-' + type);
		$('.pophover_alert .alert').text(msg);
		$('.pophover_alert').show();
		setTimeout(function(){ 
			$('.pophover_alert').css('top','70px');
			setTimeout(function(){ 
				$('.pophover_alert').css('top','0');
				setTimeout(function(){ 
					$('.pophover_alert').hide();
					$('.pophover_alert .alert').removeClass('alert-' + type);
				},600)
			},duration);
		},100);

		setTimeout(function() {holdOn = false;}, duration + 1000);
	}


}

$(document).ready(function(){
	fixTextarea()
})


/** Below events for editables titles/description on the cards **/
function fixTextarea(){
	$('textarea.long-field').each(function(){
		element = this;
		element.style.height = "5px";
		element.style.height = (element.scrollHeight)+"px";
	});
}

$("body").on('keydown click','textarea.long-field',function(event){

	if(event.keyCode == 13){
		$(this).blur();
	}
	event.stopPropagation();
});


$("body").on('keyup','textarea.long-field',function(event){
	element = this;
	element.style.height = "5px";
	element.style.height = (element.scrollHeight)+"px";
});

$(document).on('click','textarea.long-field-title',function(){
	$(this).removeAttr('disabled');
});


function toggleEditedMode(el){
	$this = $(el);
	$parent = $this.parents('td');
	
	if($parent.hasClass('inEditMode')){
		$parent.find('textarea.long-field-title').attr('disabled','');
		$parent.removeClass('inEditMode');
		$parent.find('.controls:not(.controls-save)').fadeIn(100);
		$parent.find('.controls-save').hide();
	}else{
		$parent.find('textarea.long-field-title').removeAttr('disabled');
		$parent.addClass('inEditMode');
		
		$parent.find('.controls:not(.controls-save)').hide();
		$parent.find('.controls-save').fadeIn(100);
	}
}

function toggleNotification(txt,timeout = 5000){
	
	$notificationBody = `
		<div class="notification-panel"> 
			<a class="CloseNotification" title="Close" href="javascript:void(0)"><i class="uicon icon_img_remove"></i></a>
			<label>`+ txt +`</label>
		</div>
	`;
	
	if($('.notification-panel').length <= 0){
		$('body').append($notificationBody);
		setTimeout(() => {
			$('.notification-panel').addClass('open');
			$('.CloseNotification').on('click',function(){
				$('.notification-panel').removeClass('open');
				setTimeout(() => {
					$('.notification-panel').remove();
				},800);
			});
		}, 200);

		if(timeout > 0){
				setTimeout(() => {
					$('.notification-panel').removeClass('open');
					setTimeout(() => {
						$('.notification-panel').remove();
					},800);
				}, timeout + 1100);
			}
	}
}

(function($) {
if($.noty){
	$.noty.layouts.ThakaBottomRight = {
		name: 'bottomRight',
		options: { // overrides options
			
		},
		container: {
			object: '<ul id="noty_ThakaBottomRight_layout_container" />',
			selector: 'ul#noty_ThakaBottomRight_layout_container',
			style: function() {
				$(this).css({
					bottom: 20,
					right: 20,
					position: 'fixed',
					width: '310px',
					height: 'auto',
					margin: 0,
					padding: 0,
					listStyleType: 'none',
					zIndex: 10000000
				});

				if (window.innerWidth < 600) {
					$(this).css({
						right: 5
					});
				}
			}
		},
		parent: {
			object: '<li />',
			selector: 'li',
			css: {}
		},
		css: {
			display: 'none',
			width: '310px'
		},
		addClass: ''
	};
}
})(jQuery);


//Function infinte scrolling
var requestISDone = true;;
$(window).bind('scroll', function() {
	
    if($(window).scrollTop() >= $('body').offset().top + $('body').outerHeight() - window.innerHeight) {
		//following is simulating the request proccess 
		if(requestISDone){
			requestISDone = false;
			$('.loading-more-notifications').css('visibility','visible');
		setTimeout(function(){
			var newList = "";
			$('.notificationWrapper > li').each(function(index){
					console.log(index);
					newList += $(this)[0].outerHTML;
					if(index == 10){return false;} 
			});
			
			$('.notificationWrapper').append(newList);
			$('.loading-more-notifications').css('visibility','hidden');
			console.log('appended')
			requestISDone = true;
		},2000)
	}

    }
});