

function showhelp()
{
	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$.get("help.html", function(data) {
         $('.showhelp').html(data);
         var lan = 'en';
         $(".languagecheck").each(function(){
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');
         		}
         });
          $('.showhelp').find('.hiding').hide();
         $('.showhelp').find('.lang_'+lan).show();
         $('.showhelp').show();
    });
 }
 function showpolicy()
 {
 	menuCheck();
 	$('.tt').hide();
 	$('#backbutton').show();
 	$.get("policy.html", function(data) {
          $('.showpolicy').html(data);
          var lan = 'fr';
          $(".languagecheck").each(function(){
          		var that = $(this);
          		if(that.hasClass('ui-btn-active')){
          			lan = that.attr('rel');
          		}
          });
           $('.showpolicy').find('.hiding').hide();
          $('.showpolicy').find('.lang_'+lan).show();
          $('.showpolicy').show();
     });
  }
function check(code){

	menuCheck();


	var appstrcont =  localStorage.getItem('appstrvalue');
	var appstrvaluecont = JSON.parse(appstrcont);

	appstrvaluecont.contracode = code;

	localStorage.setItem('appstrvalue', JSON.stringify(appstrvaluecont));


	$('.tt').hide();
	$('#backbutton2').show();

	$('.speciespopup').html(showLoader()).show();

		$.get("checking.html", function(data) {
         $('.speciespopup').html(data).show();
     });

}



 function showabout()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();

	$.get("about.html", function(data) {
         $('.showabout').html(data);


         var lan = 'en';
         $(".languagecheck").each(function(){
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');
         		}
         });
          $('.showabout').find('.hiding').hide();
         $('.showabout').find('.lang_'+lan).show();
         $('.showabout').show();

    });


}



function showhome()
{

	menuCheck();
	$('.lang_wrap').show();
	$('.SearchWrapper').empty();

	var appstrval =  localStorage.getItem('appstrvalue');
	var appstrvalue = JSON.parse(appstrval);

	var newappstr = appstrvalue.txtappstr;

	var frmvalues = localStorage.getItem('formvalues');
	var fnlvalue = JSON.parse(frmvalues);

	fnlvalue.txtcurquest = "";
	fnlvalue.txtquest = "";
	fnlvalue.txtappstr= newappstr;
	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

	if( $(".showContraContent:visible").is(":visible")){
		$('.tt').hide();
		$('.showresults').show();
	}else{
		$('.tt').hide();
		$('.cancelbutton, .nextbutton').hide();
		$('#cbp-spmenu-s2 , #showRight, #backbutton').show();
		$('.message').show();
		$('.canvasdiv').show();
		$('#backbutton').hide();
	}

}

function shownewhome(){
	menuCheck();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.tt').hide();
	$('#backbutton').hide();
	$('#backbutton1').hide();
	$('#backbutton2').hide();
	var a = window.innerHeight;
	var style_h ="";
	if(a>700){
            h= a-60;
   style_h = 'style="height:'+h+'px;"';
        }
        //alert(isframe);
	 /*var isframe = '<svg  xmlns="http://www.w3.org/2000/svg" id="homesvg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"  '+style_h+' image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink">';
         var test = 'staticSVGs/index.svg';
            $.get(test, function(data) {
              isframe+=data;
              isframe+='</svg>';

              $('.message').html(isframe).show();
            },dataType="text");*/
  $('.message').html(isframe).show();

            var appstrval =  localStorage.getItem('appstrvalue');
			var appstrvalue = JSON.parse(appstrval);

			var newappstr = appstrvalue.txtappstr;

            var frmvalues = localStorage.getItem('formvalues');
			var fnlvalue = JSON.parse(frmvalues);

	    	fnlvalue.txtcurquest = "";
	    	fnlvalue.txtquest = "";
	    	fnlvalue.txtstore = "0";
	    	fnlvalue.txtappstr= newappstr;
	    	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

           extraHome();

}



function shownext()
{
	$('.showSearchContent').html(showLoader());

	$.get("searchnext.html", function(data) {
         $('.showSearchContent').html(data);
    });

}


function showspecies()
{
		menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$('.showspecies').show();
  pop(2);

}

function menuCheck(){

	$('.lang_wrap').hide();
	$('.lang_wraplocal').hide();
	$('.lang_wrapcontra').hide();
	$('.canvasdiv').hide();
	var hasclass = $( "#cbp-spmenu-s2" ).hasClass( "cbp-spmenu-open" ) ;
	if(hasclass == true){
		$('#showRight').trigger('click');
	}
}
function showsearch()
{

	menuCheck();
	$('.tt').hide();
	$('#cbp-spmenu-s2 , #showRight, #backbutton').hide();
	$('.cancelbutton, .nextbutton').show();

	$('.showSearchContent').show();

	$.get("search.html", function(data) {
         $('.showSearchContent').html(data);
    });

}

function showquest(charname)
{
    console.log(charname);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`localStorage - ${key}: ${value}`);
    }

	var listvalues = localStorage.getItem('formvalues');
    try {
        // Parse the JSON if it exists, otherwise initialize as an empty object
        finalvalue = listvalues ? JSON.parse(listvalues) : {};
    } catch (e) {
        console.error("Error parsing JSON from localStorage: ", e);
        finalvalue = {}; // Initialize as empty object if parsing fails
    }
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.txtquest = charname;
    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();

	$('.tt').hide();
	$('#backbutton').show();
	$('.selectquest').html(showLoader());

	$.get("selectquest.html", function(data) {

         $('.selectquest').html(data).show();
    });

}


function showresults()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$('.showResultContent').html(showLoader()).show();

	$.get("results.html", function(data) {
         $('.showresults').html(data);//.show();

          var lan = 'en';
         $(".languagecheck").each(function(){
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');
         		}
         });

         $('.showresults').find('.resultlistspec').html(window.i8ln[lan].nomspecies);
         $('.showresults').find('.resultpercentage').html(window.i8ln[lan].resultpercentage);
         $('.showresults').find('.resulterror').html(window.i8ln[lan].resulterr);
         $('.showresults').find('.resultview').html(window.i8ln[lan].resultview);

         $('.showresults').show();
    });
}

//function popup(portalLink, localLink){
function popup(portalLink){

//alert(portalLink)
	menuCheck();
	$('.tt').hide();
	$('#backbutton1').show();

	$('.lang_wraplocal').show();

	var listvalues = localStorage.getItem('appstrvalue');
   	var finalvalue = JSON.parse(listvalues);
    //var newLocalURL = generate_local_link(portalLink);
    //console.log(newLocalURL);
    //finalvalue.linkresult = localLink;

	//localStorage.setItem('appstrvalue', JSON.stringify(linkvar));

	/*$.get(newLocalURL, function(data) {
          //alert(data.instance);
          var html_output = gene_html(data.instance,'123');
          $(".popup").html(html_output).show();
          //$.getScript('js/offline.js');
          },dataType="json")
    .fail(function(error) {
                                 alert("error on load species data"); // or whatever
                                 });*/
  if(navigator.connection.type != "none"){
  $('.popup').html(showLoader()).show();

    $(".popup").html('<iframe height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes"  src="'+portalLink+'" type= "text/javascript"></iframe>').show();
    }else{
      window.plugins.toast.show('No Internet', 'bottom', 'center',
        function(a){
          console.log('toast success: ' + a)
        }, function(b){
          //alert('toast error: ' + b)
        })
    }
	    }
function generate_local_link(portalLink){

    var speciesURL = portalLink;
    var speciesURLSplit = speciesURL.split("/");
    var speciesId = speciesURLSplit[speciesURLSplit.length-1];
    var newLocalURL = 'species/json/'+speciesId+'.json';
    return newLocalURL;
}


function speciesPopup(link){
//alert(link);
		menuCheck();
	$('.tt').hide();
	$('#backbutton2').show();
	$('.lang_wrapcontra').show();

	var listvalues = localStorage.getItem('appstrvalue');
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.linkspecies = link;
    localStorage.setItem('appstrvalue', JSON.stringify(finalvalue));



    //var newLocalURL = generate_local_link(link);

//console.log(newLocalURL);
    /* $.get(newLocalURL, function(data) {
           //alert(data);
           var html_output = gene_html(data.instance,'123');
           $(".speciespopup").html(html_output).show();
       // $(".speciespopup").html(data).show();
           },dataType="json")
    .fail(function(error) {
       alert("error on species data"); // or whatever
       });*/

  if(navigator.connection.type != "none"){
      $('.speciespopup').html(showLoader()).show();

	    $(".speciespopup").html('<iframe  height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="overflow:hidden;width:100%;height:200%;" src="'+link+'" type= "text/javascript"></iframe>').show();
    }else{
      window.plugins.toast.show('No Internet', 'bottom', 'center',
        function(a){
          console.log('toast success: ' + a)
        }, function(b){
          //alert('toast error: ' + b)
        })
    }
}

function showlistpopup(){

	menuCheck();
	$('.tt').hide();
	$('#backbutton2').hide();
	$('.showspecies').show();

	}

	function showresultspopup(){

		menuCheck();
	$('.tt').hide();
	$('#backbutton1').hide();
	$('.showresults').show();

	}

function replacechar(cname)
{
	$('.cancelbutton, .nextbutton').hide();
	var listvalues = localStorage.getItem('formvalues');
    var finalvalue = JSON.parse(listvalues);
    finalvalue.txtcharname = cname;

    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	$('#showRight, #cbp-spmenu-s2 ').show();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.SearchWrapper').empty();
	$('.tt').hide();
	$('#backbutton').hide();

	$('.showone').trigger('click');

	$('.message').html(showLoader()).show();
	$('.forLoader').html(showLoader()).show();

    $.get("redrawdefault.html", function(data) {
         $('.message').html(data).show();
    });


}


function showerrors(spcode)
{
	$('#backbutton').show();
	var errorVal = { "spcode": spcode};
    localStorage.setItem('errorPage', JSON.stringify(errorVal));
	$('.tt').hide();
	$('.showContraContent').html(showLoader()).show();

	$.get("contra.html", function(data) {
         $('.showContraContent').html(data);
    });


}

function showLoader(){

	var output_load = '<div class="loading-icon">';
        output_load += '<div class="loading-bar-0"></div>';
        output_load +=          '<div class="loading-bar-1"></div>';
        output_load +=          '<div class="loading-bar-2"></div>';
        output_load +=          '<div class="loading-bar-3"></div>';
        output_load +=          '<div class="loading-bar-4"></div>';
        output_load +=    '</div>';

        return output_load;
}

var commmonNames = '';

function pop(stype){

	$(".newspecieslistwrapper").hide();
	 if(stype==1){

	 	$("#commonnames").show();
	 	$(".scrollnames").hide();

	 }
	 else if(stype==2){

	 	$("#commonfamilies").show();
	 }
	 else if(stype==3){

	 	$("#commonspecies").show();
	 	$(".scrollspecies").hide();
	 }else {
	 	$("#reversecontra").show();
	 	$(".scrollcontra").hide();
	 }
       searchSpecies(stype);

}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


 function markselected(cid, svgdoc) {


	var bbox = svgdoc.getElementById(cid).getBBox();
	var node = svgdoc.getElementById("imgtick");
	var nwidth = bbox.width;

	var newx = bbox.x+nwidth/2;
	var newy = bbox.y+2 +20;

	node.setAttribute("x", newx);
	node.setAttribute("y", newy);

 }

 	function addLeadingZero(n) {
        return (n < 10) ? ("0" + n) : n;
    }


/*Species Page functions*/

function gene_breif(notes){
    return '<li><a href="#" class="jslist"><i></i>Brief</a><ul><li>'+notes+'</li></ul></li>';
}

/*function gene_classify(taxonRegistry){
 var output = '<li><a href="#" class="jslist"><i></i>Classifications</a><ul class="closed" >';
 $.each(taxonRegistry[0].hierarchies, function(k,v){
 //console.log(v);
 output +='<li>'+v.rank +'  --  '+ v.name+'</li>';
 });
 output += '</ul></li>';
 //console.log(output);
 return output;
 } */

function gene_synonyms(synonyms){
    var output = '<li><a href="#" class="jslist"><i></i>Synonyms</a><ul class="closed">';
    $.each(synonyms, function(k,v){
           output +='<li>'+v.name+'</li>';
           });
    output += '</ul></li>';
    //console.log(output);
    return output;
}

function gene_commonnames(commonnames){
    var output = '';
    if(Object.keys(commonnames).length > 0){
        // To do make the list value

        return output;

        //return '';
    }else{
        return output;
    }
}

function gene_speciesFields(species_fields,langId){
    var output = '';
    var chjk = '';
    var ignore_fields = ['Nomenclature and Classification' , 'References','Documents','Nomenclature et Classification','Références'];
    var ignore_repeat_category = [];
    var ignore_repeat_concept = [];
    //console.log("Fields Total = "+Object.keys(species_fields).length);
    $.each(species_fields, function(k,v){
           console.log("Passed 1" +langId);
           if(v.field.language.id == parseInt(langId)){
           //console.log("Passed Language");
           if($.trim(v.text) != ''){
           //console.log("Passed Text");
           if($.inArray( $.trim(v.field.concept), ignore_fields ) == -1){
           if( $.inArray( $.trim(v.field.category), ignore_fields ) == -1){
           if($.inArray( $.trim(v.field.concept), ignore_repeat_concept ) == -1){
           //console.log("Passed Category");
           output += chjk;
           chjk    = '</li></ul></li>';  // first li close for category close
           output += '<li><a href="#" class="jslist"><i></i>'+v.field.concept+'</a><ul class="closed">';
           output += '<li><h4>'+v.field.category+'</h4>';
           output += v.text;
           ignore_repeat_concept.push(v.field.concept);
           }else{
           if($.inArray( $.trim(v.field.category), ignore_repeat_category ) == -1){
           //console.log("Passed concept");
           output += '<li><h4>'+v.field.category+'</h4>';
           output += v.text;
           ignore_repeat_category.push(v.field.category);
           }else{
           output += "<hr>"+v.text;
           }
           }

           }
           }

           }

           }
           });
    //console.log(output);
    return output;


}


function gene_resource(resource){

  var output ='';
  $.each(resource, function(k,v){
      output +='<div class="swiper-slide" style="background-image:url("'+v.icon+'")"></div>';
  });
  return output;

  console.log("resoutpot ------"+output);
}


function gene_html(speciesInstance,langId){
    var output ='';
    output += '<div class="specieslocal">';
    output += '<a href="#" rel="en_'+speciesInstance.id+'" class ="change_lan">En</a> | <a href="#" rel="fr_'+speciesInstance.id+'" class ="change_lan">Fr</a>';
    output += '<h1>'+speciesInstance.title;
    var portal_url = 'http://portal.wikwio.org/species/show/'+speciesInstance.id;
    output += '<a href="#" onclick=\'window.open("'+portal_url+'", "_system");\' style="text-decoration:none;" class="portallinkanchor">- Online version</a></h1>';
    // output += '<img src="species/1.jpg" style="width: 100%;height: 50%;" />';
    /* Species List  Started */

    output +='<div class="swiper-container">';

    output +='<div class="swiper-wrapper">';

    output += gene_resource(speciesInstance.resource);

    output += '</div>';
    output += '<div class="swiper-button-next swiper-button-white"></div>';
    output += '<div class="swiper-button-prev swiper-button-white"></div>';
    output += '</div>';
    output += '<script>';
    output += 'var galleryTop = new Swiper(".swiper-container", {';
    output += 'nextButton: ".swiper-button-next",';
    output += 'prevButton: ".swiper-button-prev",';
    output += 'spaceBetween: 10,';
    output += '});';
    output += '</script>';

    output += '<ul>';

    output += gene_breif(speciesInstance.notes);

    //output += gene_classify(speciesInstance.taxonRegistry);

    output += gene_synonyms(speciesInstance.synonyms);

    output += gene_commonnames(speciesInstance.common_names);

    output += gene_speciesFields(speciesInstance.fields,langId);

    output += '</ul></div>';
    return output;

}



$(document).on('click',".jslist",function() {
    var _this = $(this);
    _this.toggleClass('active', 5);
    _this.next().toggleClass('closed', 500);
    $(".jslist").not(_this).each(function() {
            $(this).next().addClass('closed', 500);
            $(this).removeClass('active', 5);
    });
});



$(document).on('click','.change_lan',function(){
   var spLan    = $(this).attr('rel');
   var languageList = {'en' : '123', 'fr' : '137'};
   var spLanObj = spLan.split("_");
   var lanStr = spLanObj[0];
   var speciesId = spLanObj[1];
   var languageId = languageList[lanStr];
   //console.log("languageId ="+languageId+" speciesId ="+speciesId+" lanStr ="+lanStr);

   $.ajax({
          url : 'species/json/'+speciesId+'.json',
          dataType : "json",
          success : function(data){
          var html_output = gene_html(data.instance,languageId);
          $(".popup").html(html_output).show();
          }
          });
});

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function formtargeturl(key)
{
  var targeturl = "https://www.ifpindia.org/digitaldb/online/biotik/species/";
  var url = targeturl + key.substr(0,1) + "/" + key +"/" + key + "_en.html";
  url = url.toLowerCase();
  return url;
}
