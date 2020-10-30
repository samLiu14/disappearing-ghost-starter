$(".hideButton").click(function(){
  $(".ghost-image").hide();
});

$(".showButton").click(function(){
  $(".ghost-image").show();
});

$(".updateButton").click(function(){
  $("img").attr("src", "https://media0.giphy.com/media/l4pMdRYrYUKI6I2ZO/giphy.gif");
  $("body").css("background-color", "black");
  $("body").css("color", "white");
});

$(".msgButton").click(function(){
  $(".message").text("boo?");
});

$(".nameButton").click(function(){
  let newName = $(".input").val();
  if (newName === "Bob"){
    $("h1").text("He he! Yes my name is "+ newName+"!")
  }
  if (newName != "Bob"){
    $("h1").text("No no noo!! My name isn't "+ newName +"!")
  }
});