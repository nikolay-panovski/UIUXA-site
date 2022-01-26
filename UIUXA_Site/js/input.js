$(onDocumentReady);

function onDocumentReady() {
    //console.log("ready");
    $("button.chat").click(onSubmit);
}

function onSubmit(event) {
    event.preventDefault();

    var msg = $("textarea[name='message']").val();

    /* https://stackoverflow.com/questions/18679576/counting-words-in-string */
    /* split the chat message in a basic way by spaces to "count" the words, stop messages with 3 or fewer words */
    if (msg.split(' ').length <= 3 /*|| msg.indexOf('?') == -1*/) {
            $(".warning").attr("hidden", false);

            $(".quick-buttons").addClass("quick-buttons-warning");
        }
    else {
        //console.log(msg);
        $(".chat-box").append(
            `<div class="chat-item">
                <p class="user-name">User</p>
                <p class="chat-message">` + msg + `</p>
            </div>'`);

        // clear chat box
        $("textarea[name='message']").val("");

        $(".warning").attr("hidden", true);
        $(".quick-buttons").removeClass("quick-buttons-warning");
    }
}

