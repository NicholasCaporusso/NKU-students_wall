shuffle(students);
var allImages='';
for(var i=0;i<students.length;i++) allImages+='<div><div class="image" style="background-image:url(\'students/'+students[i]+'.png\');" data-url="'+students[i]+'.html"></div></div>';
$('#photos').append(allImages);
$(document).on('click','.image',function(){
	$('#studentModal .modal-body').html('<p class="lead">The student does not have a page</p>');
	$('#studentModal .modal-body').load('students/'+$(this).data('url'));
	$('#studentModal').modal('show');
});


function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};