//Marking ToDo
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");		
});

//Deleting a ToDo
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
event.stopPropagation();
});

//New ToDo
$("input[type='text']").on("keypress", function(event){

	if(event.which === 13){

		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to the ul
		$("ul").append("<li><span><i class= 'fa fa-trash'></i></span> " +  todoText + "</li>");
	}
	
});


$(".fa-plus").on("click", function(){

$("input[type='text']").fadeToggle();
});