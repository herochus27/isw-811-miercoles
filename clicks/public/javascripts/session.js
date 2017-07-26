var Session = {
    getData: function(){
      return $.getJSON('/session');
    },
    insert: function (data){
      return $.post('/session', data);
    }
};
function saveSession(){
  session.getData().done(function(json){
    console.log(json);
    $('#clickSession').val(json);
    $('#lblCount').text(json);
  });
}
