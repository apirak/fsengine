$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
    $('#datetimepickerDeparture').datetimepicker({
    	format: 'DD/MM/YYYY'
    });
    $('#datetimepickerReturn').datetimepicker({
    	format: 'DD/MM/YYYY'
    });
    $("#scrollPrice").slider({
      id: "price-search-slider",
      min: 0,
      max: 200,
      range: true,
      value: [0,200]
    });
    $("#scrollPrice").on("slide", function(slideEvt) {
      $("#priceMin").text(slideEvt.value[0]);
      $("#priceMax").text(slideEvt.value[1]);
    });
});

var data = { orders: [
  {id:"1", airline: "atl", price: 125, flights:{
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
  {id:"2", airline: "sia", price: 125, flights:{
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
  {id:"3", airline: "swa", price: 125, flights:{
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
  {id:"4", airline: "tap", price: 125, flights:{
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
  {id:"5", airline: "vta", price: 125, flights:{
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
	var source   = $("#orders-template").html();
	var template = Handlebars.compile(source);

	$("#content-placeholder").html(template(data));

	// data.users[0].username = "bank"
	// data = data2;
	// $("#content-placeholder").html(template(data));

});