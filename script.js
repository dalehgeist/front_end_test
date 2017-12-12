$(function(){
  //Toggle behavior
  $(".toggle").click(function() {
	  $( this ).toggleClass( "open" );
	  $( this).next().slideToggle( "fast" );
	});

  //Enable Submit when radio button is activated
  $( "input[type='radio']" ).change(function() {
  	  $( "button[type='button']" ).prop( "disabled", false );
	});

  //Submit behavior
  $( "#submit-vote" ).click(function() {
	  $( "#cover" ).css("display", "block");
	  $( "#message" ).css("display", "block");
	});
});