

	var userselcount = 0;	
	var usrstore1 = new Array(); 
	var perarray = new Array(); 
	var flag = false;
	var outputarr = new Array();
	var floresult = new Array();

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
	var errorflag = 0;

	var globalval = localStorage.getItem('globalVar'); 

  	var glbvalue = JSON.parse(globalval);

 	 var cname  = no_state;

	if(store1.length == "1"){

		}else{
	for ( var i=0; i<cname; i++){		
		var intval = parseInt(store1.substr(i, 1));
		errorflag = parseInt(errorflag) + intval;		

	}
}
	
	var htmlelement="";
	
        
 document.addEventListener("deviceready", onDeviceReady, false);


 function onDeviceReady() {

    $(".loading-icon").show();
	floreDB();
}

function floreDB(){


	var lang = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lang = that.attr('rel');	
         		}
         });


	var target_url;
	var portal_url;
	var species_name;
	var temp;
	for (var i = 0; i < Object.keys(flore_asc).length; i++){
		perarray[flore_asc[i]["Code"]] = 0;

		target_url = "species/" + lang + "/";
		temp = flore_asc[i]["Code"];

		target_url +=  temp + ".html";

		target_url = target_url.toLowerCase();

		species_name = flore_asc[i]["Espece"];

		portal_url = flore_asc[i]["portal_url"];
	
		floresult[temp] = [ species_name, portal_url, target_url ];
	}

	
carDB();
}

function carDB(){

	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    var store1 = finalvalue.txtstore;
    var carac;
	for (var i = 0; i < Object.keys(caract_full).length; i++)
	{
		carac =  caract_full[i]["ID_CARAC"];	
		usrstore1[carac] = store1.substr(i, 1); 
		if (store1.substr(i, 1) == "1")
			userselcount++;
	}

	if(store1.length == 1) {

		toDo();
	}else{
		queryusrDB();
	}
	
}

function queryusrDB()
{
	var countif=0;
	
	for (var key in usrstore1)
	{

		if (usrstore1[key] == "1")
		{
			countif++;
			
			var eMpty =0;
			for(var te = 0; te < Object.keys(flore_full).length; te++){
						if(flore_full[te][key] == 1){
							eMpty++;
							var mnmn = flore_full[te]["Code"];
							perarray[mnmn]++ ;
						}
			}
			
			if(countif == userselcount){
				flag = true;
			}
		}
	}
	toDo();
	
}

function toDo(){
	var per;
	for (var key in perarray)
	{
		if (perarray[key] > 0)
		{
			per = (perarray[key]/userselcount) * 100;
			perarray[key] = Math.round(per);
		}
	}
	
resultss();

}




function resultss(){

	var usrpercent = 0;
	var trow = 0 ;

	var totspecies = Object.keys(perarray).length;
	var max = 100;
	while (max >= 0)
	{
		for (var key in perarray)
		{
			if (perarray[key] == max)
				outputarr[key] = max;
		}
		max--;
	}

	
	
	htmlelement += "<div style=' overflow-y: scroll;'>";
	htmlelement += `<div class="text-center font-bold w-full h-10 text-2xl">
    Results.
  </div>`
	htmlelement += "<div class='flex flex-wrap justify-center'>";
	htmlelement += '';
	htmlelement += "";
	htmlelement += "";
	htmlelement += "";

	if (errorflag != "0")	{
		htmlelement += "";
	}
	htmlelement += "";
	for (var key in outputarr)
	{
		if (trow % 2 == 0)
			htmlelement += "";
		else
			htmlelement += "";

	
		var val = floresult.hasOwnProperty(key); 
		if(val == true){

			
			htmlelement += "<div  onclick=\"popup('"+formtargeturl(key)+"')\" class=\"cursor-pointer rectangle h-56 w-32 rounded-2xl bg-gray-300 m-4 flex flex-col justify-center items-center overflow-y-auto\">";
			htmlelement += `<div class="speciesname font-bold h-fit w-min text-black ">`+floresult[key][0]+`</div>`
			htmlelement += `<div class="speciespercentage mt-2 text-black">`+perarray[key] +`%</div>`;
			htmlelement += "<div class=\"viewspec w-16 h-6 mt-4 bg-blue-500 rounded-lg flex justify-center items-center\" onclick=\"popup('"+formtargeturl(key)+"'); event.stopPropagation();\">" +
                "<div class=\"text-white\">view</div>" +
              "</div>";
			
			if (errorflag != "0" )
				{
					
					if (outputarr[key] != "100"){
						htmlelement += "<div class=\"specieserror w-16 h-6 mt-4 bg-red-500 rounded-lg flex justify-center items-center\" onclick=\"showerrors('" + key + "'); event.stopPropagation();\">" +
                "<div class=\"text-white\">errors</div>" +
              "</div>";

					}
					else{
						htmlelement += "";
					}

					
				}
			htmlelement +=  "</div>";
		}
		trow++;
	}

	htmlelement += `</div>`

	$(".loading-icon").hide();
	$(".selectResultWrapper").html(htmlelement);
}


