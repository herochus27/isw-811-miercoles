var Session = {
    getData: function(){
      return $.getJSON('/sesion');
    },
    insert: function (data){
      return $.post('/sesion', data);
    }
};

$(document).ready(function(){
  $("#clickSession").on("click", function () {
    var count = $(this).val();
    count++;
    $(this).val(count);
    $("#lblCount").text(count);

    var getCount= {count:count};
    Session.insert(getCount).done(function(json){
      saveSession();
    });
  });

  $("#resetSession").on("click",function() {
    $("#lblCount").text(0);
    $("#clickSession").val(0);
    var getCount= {count: 0};
    Session.insert(getCount).done(function(json){
      saveSession();
    });
  });
    saveSession();
});

function saveSession(){
  Session.getData().done(function(json){
    $('#clickSession').val(json);
    $('#lblCount').text(json);
  });
}
