// This will hide the text lesson detail row
$(function() {
    if(typeof(CoursePlayerV2) !== 'undefined') {
        CoursePlayerV2.on('hooks:contentDidChange', function(data) {
            console.log("changed");
            $(".content-item__details:has(.toga-icon-content-text)").hide();
        });
    }
});