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

var data = { orders: [
  {id:"1", price: 125, flights:{
  	go:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	},
  	back:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	}
  }},
  {id:"2", price: 125, flights:{
  	go:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	},
  	back:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	}
  }},
  {id:"3", price: 125, flights:{
  	go:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	},
  	back:{
  		id:"AI-202",
  		from: "PNQ",
  		to: "DEL",
  		depart: "10:00 AM",
  		arive: "12:00 PM"
  	}
  }}
]};

$(function () {
	// handlebars
	var source   = $("#some-template").html();
	var template = Handlebars.compile(source);

	$("#content-placeholder").html(template(data));

	// data.users[0].username = "bank"

	// data = data2;

	// $("#content-placeholder").html(template(data));

});