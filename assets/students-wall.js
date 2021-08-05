var students=[
'2021-Spring-INF-286-002-Andy-Maratea',
'2021-Spring-INF286-001-Evan_Higgins',
'2021-Spring-INF286-001_Lillyann_Tursany',
'2021-Spring-INF286-001_rojan_kc',
'2021-Spring-INF286-002-Aryan_Tandon',
'2021-Spring-INF286-002-Carlee_Franklin',
'2021-Spring-INF286-002-Quan-Vu',
'2021-Spring-INF286-002_Aryan_Tandon',
'2021-Spring-INF286-002_Blake_Wagner',
'2021-Spring-INF286-002_Charlie_Frederick',
'2021-Spring-INF286-002_Ethan_Ennis',
'2021-Spring-INF286-002_Luke_Nordheim',
'2021-Spring-INF286-002_Maen_Marashdeh',
'2021-Spring-INF286-002_Matt_Henn',
'2021-Spring-INF286-002_Max_Nordheim',
'2021-Spring-INF286-002_Reagan_Atchison',
'2021-Spring-INF286-002_Thang_Nguyen',
'2021-Spring-INF286-002_Tyler_Ryan',
'2021-spring-INF286-001_Justin_Walter',
'2021-spring-INF286-002_Geo_Esquivel',
'2021-Summer-INF286-001_LaShondra_Schwab'
];


shuffle(students);
var allImages='';
for(var i=0;i<students.length;i++) allImages+='<div><div class="image" style="background-image:url(students/'+students[i]+'.png);" data-url="'+students[i]+'.html"></div></div>';
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