;(function(global, $) {
  $('#save').click(function() {
    $.ajax({
      dataType: 'json',
      async: true,
      data: {
        name: $('#name').val(),
        chinese: $('#chinese').val(),
        english: $('#english').val(),
        math: $('#math').val()
      },
      type: 'POST',
      beforeSend: function(e) {},
      success: function(response) {
        if (response) {
          var success = response.message
        }
        var newDom = '<p>' + success + '</p>'
        $('.add-save').after(newDom)
        setTimeout(function() {
          location.assign('/')
        }, 500)
      },
      error: function(error) {
        alert('请求失败', error)
      },
      complete: function() {}
    })
  })
})(window, jQuery)
