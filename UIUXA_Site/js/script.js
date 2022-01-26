$(onDocumentReady);

function onDocumentReady() {
    //console.log("ready");
    $(".menu-item-top").click(onAsideMenuItemClick);
    //$(".menu-item-subject").click(onSubjectMenuItemClick);
    $(".menu-item-subject").hover(onSubjectMenuItemHoverIn);
}

function onAsideMenuItemClick(event) {
    $(".menu-item-top").find(".menu-items-inside").attr("hidden", true);
    $(event.currentTarget).find(".menu-items-inside").attr("hidden", false);
}

function onSubjectMenuItemClick(event) {
    $(".menu-item-subject").removeClass("slide-right");
    $(event.currentTarget).addClass("slide-right");
}

function onSubjectMenuItemHoverIn(event) {
    $(".menu-item-subject").removeClass("slide-right");
    $(event.currentTarget).addClass("slide-right");
}