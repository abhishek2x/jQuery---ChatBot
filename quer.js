
username = ""

$(document).ready(function () {

    get_username();

    $('#textbox').keypress(function (e) {
        if (e.which == 13) {
            if ($('#enter').prop("checked")) {

                $('#send').click();
                e.preventDefault();

            }
        }
    });


    function send_message(message) {


        var prevState = $('#container').html();

        if (prevState.length > 3) {
            prevState = prevState + "<br>";
        }

        $('#container').html(prevState +"<div class='bg'>" + 
            '<span class="current_message">' + "<br>" + '<span class="bot">Chatbot :</span>' +
            "<br>" + message + "</span>" + "</div>");

        $('.current_message').hide();
        $('.current_message').delay(500).fadeIn();
        $('.current_message').removeClass("current_message");
    }


    function get_username() {
        send_message("Hello what is your name?")
    }

    function ai(message) {
        if (username.length < 3)
            username = message;
        send_message("Nice to meet you " + username + ", how are you doing?")

    }

    $('#send').click(function (e) {
        e.preventDefault();

        var username = "<span class='username'>You :</span>";

        var newMessage = $('#textbox').val();
        $('#textbox').val("");

        var prevState = $('#container').html();

        // if (prevState.length > 3) {
        //     prevState = prevState + "<br>";
        // }

        $('#container').html(prevState + "<br>" + username + "<br>" + newMessage);

        $('#container').scrollTop($("#container").prop("scrollHeight"));

        ai(newMessage);
    });

});
