
var dbName = "biotik.db"
var object_asc = [];
var char_val = [];
var char_val_arr = [];
var object_full = [];
var caract_full = [];
var descendance_full = [];
var flore_full = [];
var flore_asc = [];
var perarray = [];
var contradiction_full = [];

var communs_english = [];
var commonNamesList = '';
var familleNamesList = '';
var speciesNamesList = '';
var contraNamesList = '';


var flore_order_by_famille = [];

var matrice = new Array();

var nombre;
var listScroll = '';
function searchmatrix(){
var caracter;
nombre = Object.keys(flore_full).length;
for (var i = 0; i < nombre; i++)
  {
  	for(var j = 0; j < Object.keys(caract_full).length; j++){
  		
  		caracter = caract_full[j]["ID_CARAC"];  
  		if(j==0){
  			matrice[i]=[];
  		}
  		matrice[i][j]=0;
  		matrice[i][j] = flore_full[i][caracter];
  	}
    
  }
}
function searchSpecies(checkVal){
	            $(".loading-icon").show();

	presentval = 0;
	listScroll = ''
	var db = window.sqlitePlugin.openDatabase({name: dbName,location:'default'});
	if(checkVal==1){
		if(commonNamesList==''){
			db.transaction(commonnName, errorObjCB);
		}else{
									$(".loading-icon").hide();

		$('.commmonFamille').hide();
		$('.RevverseContra').hide();
		$('.commmonSpecies').hide();
		$('.commmmNames').show();
			 var optionsvar1 = {
            page: $(".commonnames ul li").size(),
            valueNames: [ 'anchorname','' ]
        };
    
    var userListvar1 = new List('commonnames', optionsvar1);
		$(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 

		}
	}else if(checkVal==2){
		if(familleNamesList==''){

	 		db.transaction(famillePopulate, errorObjCB);
	 	}else{
	 								$(".loading-icon").hide();

		$('.RevverseContra').hide();
		$('.commmonSpecies').hide();
		$('.commmmNames').hide();
					$('.commmonFamille').show();
			 var optionsvar = {
            page: $(".commonfamilies ul li").size(),
            valueNames: [ 'anchornar','' ]        
        };
    
    var userListvar = new List('commonfamilies', optionsvar);
    
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 


	 	}

	 }
	 else if(checkVal==3){
		if(speciesNamesList==''){
	 		speciesPopulate();

		}else{
									$(".loading-icon").hide();

		$('.RevverseContra').hide();
		$('.commmmNames').hide();
		$('.commmonFamille').hide();
				$('.commmonSpecies').show();
			var options = {
            page: $(".commonspecies ul li").size(),
            valueNames: [ 'anchor','' ]
        };
    
    var userList = new List('commonspecies', options);
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 


		}
	 
	 }else {
	 	if(contraNamesList==''){
	 		contraPopulate();

		}else{
									$(".loading-icon").hide();

		$('.commmmNames').hide();
		$('.commmonFamille').hide();
		$('.commmonSpecies').hide();
		$('.RevverseContra').show();
		var optionscont = {
            page: $(".reversecontra ul li").size(),
            valueNames: [ 'anchor','' ]
        };
    
    var userListcont = new List('reversecontra', optionscont);
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 


		}
	 }
	 function scrolling(nnn){
        var pos = $("#"+nnn).position();
        $('html, body').animate( { scrollTop: pos.top }, 'slow' );
    }
}
var lengthVal ;
var presentval;
function commonnName(tx){
	lengthVal = Object.keys(communs_english).length;
	for (var j = 0; j < Object.keys(communs_english).length; j++){
		//alert(communs_english[j]["Nom"]);
			
	 tx.executeSql("select a.Code, a.Espece  from flore a, communs_english b where a.Code = b.Code and b.Nom='"+communs_english[j]["Nom"]+"'", [], showCommonNames, errorObjCB);
	}

}
function showCommonNames(tx, res){
	//alert(res.rows.length);

	if(res.rows.length>0){
		if(listScroll != communs_english[presentval]["Nom"].charAt(0)){
					commonNamesList += '<li id="noms_'+communs_english[presentval]["Nom"].charAt(0).toLowerCase()+'">';
					listScroll = communs_english[presentval]["Nom"].charAt(0);

		}else{
			commonNamesList += '<li>';
		}
		commonNamesList += '<a class="anchor anchorname" href="#"><i> <img src="img/tree.png" style="margin-top: -7px;">'
			commonNamesList += '</i>'+communs_english[presentval]["Nom"]+'</a>';
			commonNamesList += '<ul class="closed">';
				presentval++;

		for(var i=0;i<res.rows.length;i++){
			
			commonNamesList += '<li><a class="anchor"  href="#"  onclick=speciesPopup("'+formtargeturl(res.rows.item(i).Code)+'") >';
			commonNamesList += ''+res.rows.item(i).Espece+'';
			commonNamesList += '</a></li>';
			if(i==(res.rows.length-1)){
						commonNamesList += '</ul></li>';

			}
		}
		if(presentval ==lengthVal){
			$(".loading-icon").hide();
			$('.commmmNames').html(commonNamesList);
			 var optionsvar1 = {
            page: $(".commonnames ul li").size(),
            valueNames: [ 'anchorname','' ]
        };
    
    var userListvar1 = new List('commonnames', optionsvar1);
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 

		}
	}else{
			presentval++;

	}

}
function famillePopulate(tx){
		lengthVal = Object.keys(flore_order_by_famille).length;

	for (var j = 0; j < Object.keys(flore_order_by_famille).length; j++){
		//alert(communs_english[j]["Nom"]);
			
	 tx.executeSql("select * from flore where Famille ='"+flore_order_by_famille[j]["Famille"]+"'", [], showFamilleNames, errorObjCB);
	}

}

function showFamilleNames(tx, famRes){
	//alert(res.rows.length);

	if(famRes.rows.length>0){
		if(listScroll != flore_order_by_famille[presentval]["Famille"].charAt(0)){
					familleNamesList += '<li id="fam_'+flore_order_by_famille[presentval]["Famille"].charAt(0).toLowerCase()+'">';
					listScroll = flore_order_by_famille[presentval]["Famille"].charAt(0);

		}else{
			familleNamesList += '<li>';
		}
		familleNamesList += '<a class="anchor anchornar" href="#"><i> <img src="img/tree.png" style="margin-top: -7px;">'
			familleNamesList += '</i>'+toTitleCase(flore_order_by_famille[presentval]["Famille"])+'</a>';
			familleNamesList += '<ul class="closed">';
				presentval++;

		for(var i=0;i<famRes.rows.length;i++){
			
			familleNamesList += '<li><a class="anchor"  href="#"  onclick=speciesPopup("'+formtargeturl(famRes.rows.item(i).Code)+'") >';
			familleNamesList += ''+famRes.rows.item(i).Espece+'';
			familleNamesList += '</a></li>';
			if(i==(famRes.rows.length-1)){
						familleNamesList += '</ul></li>';

			}
		}
		if(presentval ==lengthVal){
						$(".loading-icon").hide();

			$('.commmonFamille').html(familleNamesList);
			 var optionsvar = {
            page: $(".commonfamilies ul li").size(),
            valueNames: [ 'anchornar','' ]        
        };
    
    var userListvar = new List('commonfamilies', optionsvar);
    
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 

		}
	}else{
			presentval++;

	}

}

function speciesPopulate(){


	for (var j = 0; j < Object.keys(flore_full).length; j++){
		if(listScroll != flore_full[j]["Espece"].charAt(0)){
					speciesNamesList += '<li id="espec_'+flore_full[j]["Espece"].charAt(0).toLowerCase()+'">';
					listScroll = flore_full[j]["Espece"].charAt(0);

		}else{
			speciesNamesList += '<li>';
		}
	speciesNamesList += '<a class="anchor" href="#"onclick=speciesPopup("'+formtargeturl(flore_full[j]["Code"])+'")><i> <img src="img/tree.png" style="margin-top: -7px;">'
	speciesNamesList += '</i>'+flore_full[j]["Espece"]+'</a></li>';
		if(j==(Object.keys(flore_full).length -1)){
						$(".loading-icon").hide();

			$('.commmonSpecies').html(speciesNamesList);
			var options = {
            page: $(".commonspecies ul li").size(),
            valueNames: [ 'anchor','' ]
        };
    
    var userList = new List('commonspecies', options);
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 

		}
	}



}
function contraPopulate(){


	for (var j = 0; j < Object.keys(flore_full).length; j++){
		if(listScroll != flore_full[j]["Espece"].charAt(0)){
			contraNamesList += '<li id="contra_'+flore_full[j]["Espece"].charAt(0).toLowerCase()+'">';
			listScroll = flore_full[j]["Espece"].charAt(0);

		}else{
			contraNamesList += '<li>';
		}
	contraNamesList += '<a class="anchor" href="#" onclick=check("'+flore_full[j]['Code']+'")><i> <img src="img/tree.png" style="margin-top: -7px;">'
	contraNamesList += '</i>'+flore_full[j]["Espece"]+'</a></li>';
		if(j==(Object.keys(flore_full).length -1)){
						$(".loading-icon").hide();

			$('.RevverseContra').html(contraNamesList);
			var optionscont = {
            page: $(".reversecontra ul li").size(),
            valueNames: [ 'anchor','' ]
        };
    
    var userListcont = new List('reversecontra', optionscont);
		    $(function() {
			$(".anchor").bind('click',function() {
				var _this = $(this);
				
				_this.toggleClass('active', 5);
				_this.next().toggleClass('closed', 500);
				$(".anchor").not(_this).each(function() {
					$(this).next().addClass('closed', 500);
					$(this).removeClass('active', 5);
				});
			});
		}); 

		}
	}



}




	function errorObjCB(e){
	    alert("some error"+ e.message );
	    $(".message").append("hierachie table error: " + e.message + " rows found.");
	}