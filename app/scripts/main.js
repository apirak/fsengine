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