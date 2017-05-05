$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var actorInput = $("#actor").val();
    var placesInput = $("#places").val();
    var foodInput = $("#food").val();

    var things = [actorInput, placesInput, foodInput];
    var favorite = [];
    favorite.push(things[0],things[2]);
    $("ul").prepend("<li>" + things[2] + "</li>");
    $("ul").prepend("<li>" + things[1] + "</li>");
    $("ul").prepend("<li>" + things[0] + "</li>");

  });
});
