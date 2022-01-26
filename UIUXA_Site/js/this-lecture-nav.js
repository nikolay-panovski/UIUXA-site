$(onDocumentReady);

function onDocumentReady() {
    //console.log("ready");
    $(".this-lecture").click(onThisLectureClick);
    $(".left-aside-closed").click(onLeftAsideClosedClick);
}

function onThisLectureClick(event) {
    $(".left-aside-open").attr("hidden", true);
    $(".left-aside-closed").attr("hidden", false);

    $(".right-aside").attr("hidden", false);

    $("main").css("right", "25%");
}

function onLeftAsideClosedClick(event) {
    $(".left-aside-open").attr("hidden", false);
    $(".left-aside-closed").attr("hidden", true);

    $(".right-aside").attr("hidden", true);

    $("main").css("right", "5%");
}