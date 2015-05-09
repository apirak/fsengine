$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
    $('#datetimepicker1').datetimepicker({
    	format: 'DD/MM/YYYY'
    });
    $('#datetimepicker2').datetimepicker({
    	format: 'DD/MM/YYYY'
    });
});

var data = { users: [
  {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};

var data2 = { users: [
  {username: "bank", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};

$(function () {
	// handlebars
	var source   = $("#some-template").html();
	var template = Handlebars.compile(source);

	$("#content-placeholder").html(template(data));

	// data.users[0].username = "bank"

	data = data2;

	$("#content-placeholder").html(template(data));

});