 function toFeet(n) {
   return Math.floor(n / 12) + "'" + (n % 12) + '"';
 }

 $( function() {
   var handle_low = $( "#custom-handle-low" );
   var handle_high = $( "#custom-handle-high" );

   var handle_age_low = $( "#custom-age-handle-low" );
   var handle_age_high = $( "#custom-age-handle-high" );

   handle_low.text( toFeet(45) );
   handle_high.text( toFeet(60) );

   $( "#height-low" ).val(45);
   $( "#height-high" ).val(60);

   handle_age_low.text(45);
   handle_age_high.text(60);

   $( "#age-low" ).val(45);
   $( "#age-high" ).val(60);

   $( "#slider-height-range" ).slider({
    range: true,
    min: 42,
    max: 84,
    values: [ 46, 60 ],
    slide: function( event, ui ) {
     handle_low.text( toFeet(ui.values[0]) );
     handle_high.text( toFeet(ui.values[1]) );
     $( "#height-low" ).val(ui.values[0]);
     $( "#height-high" ).val(ui.values[1]);
   }
 });

   $( "#slider-age-range" ).slider({
    range: true,
    min: 42,
    max: 84,
    values: [ 46, 60 ],
    slide: function( event, ui ) {
     handle_age_low.text( ui.values[0] );
     handle_age_high.text( ui.values[1] );
     $( "#age-low" ).val(ui.values[0]);
     $( "#age-high" ).val(ui.values[1]);
   }
 });
 });