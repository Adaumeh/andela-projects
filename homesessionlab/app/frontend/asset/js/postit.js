//Function which runs on page load
$(document).ready(function(){
		
	//Delete button click event
	$('.del_note').click(function(){
		deleteRow($(this));
	});
});

$(document),ready(function){
	$(#add_note).click(){
		addnewNote()	;
		
		});
		
		function addnewNote(class,title,content){
			notes.append( <div class='" + class + "'>" +
			              "<textarea class='note-title' placeholder='Untitled' maxlength='10'/>" +
  21:                    "<textarea class='note-content' placeholder='Your content here'/>" +)
		}
}