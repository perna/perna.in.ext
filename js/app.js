(function($){

var App = (function() {

    function init() {
        postData();
        new Clipboard('.button-copy');
        bindEvents();
    }

    function bindEvents() {
        $('.button-copy').on('click', function(){
            $(this).addClass('active').text('Copiado');
        });
    }

    function postData() {
        $('.button-copy').removeClass('active').text('Copiar');
        chrome.tabs.getSelected(null, function(tab){
            var url = tab.url;
            var data ={};
            data.url = url;
            $.post('http://perna.in/api/links', data)
                .done(function(response){
                    $('.loader').hide();
                    $('.short-url-container').show();
                    $('#short_url').val(response.short_url);

                });
            });
    }

    return {init:init};
})();

$(document).ready(function(){
    App.init();
});
})(jQuery);


