//jshint esversion: 6

let controller = function() {
  //console.log(localStorage.getItem("commentsList"))
  //load comments from local storage when page loads
  if (localStorage.getItem("commentsList")) {
    $(".comments").html(localStorage.getItem("toDoList"));
  }

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //store the list of paragraph elements
      localStorage.setItem("toDoList", $(".comments").html());
      console.log(localStorage.getItem("commentsList"));

      //log the list of paragraph elements
      console.log($(".comments").html());
    }
  };

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

let deleteHandler = () => {
  console.log("dH");
  localStorage.removeItem("commentsList");
  window.location.reload();
};

$(document).ready(() => {
  console.log("ready");
  //selected the delete button
  let buttonElem = document.querySelectorAll("button")[1];
  buttonElem.addEventListener("click", deleteHandler);
  controller();
});
