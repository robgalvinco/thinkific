/*
Initial version 
*/
var showed_hint = false;
var player_guide_options = {};
function playerGuide() {
    var player_nags = player_guide_options.nags;
    var player_hints_desktop =     
    [
      {
        'next .course-progress__container' : player_guide_options.progress_msg,
        showSkip: false
      },  
      {
        'next .course-player__chapters-menu' : player_guide_options.chapters_msg,
        showSkip: false
      },
      {
        'next .course-player__user-search' : player_guide_options.search_msg,
        showSkip: false
      },      
      {
        'next #course-player-footer' : player_guide_options.continue,
        showSkip: false
      }  
    ]; 
    
    var player_hints_mobile =     
    [
      {
        'next .course-player__top-bar__menu-toggle' : player_guide_options.mobile_menu,
        showSkip: false
      }, 
      {
        'next #course-player-footer' : player_guide_options.continue,
        showSkip: false
      }  
    ];       
  CoursePlayerV2.on('hooks:contentDidChange', function (data) {
    var enjoyhint_instance = new EnjoyHint({});
    var enjoyhint_script_steps = []
    if(device.desktop()){
        enjoyhint_script_steps = player_hints_desktop;
    } else {
        enjoyhint_script_steps = player_hints_mobile;
    }
         

    enjoyhint_instance.set(enjoyhint_script_steps); 
    if (showed_hint == false){
        var current_player_nags = 0;
        if (localStorage.getItem("playerNags") === null) {
          localStorage.setItem("playerNags",1)
        } else {
          current_player_nags = parseInt(localStorage.getItem("playerNags"));
          current_player_nags +=1 ;
        }
        
        console.log("cpn"+current_player_nags);
        console.log("pn"+player_nags);
        if(current_player_nags < player_nags){
            localStorage.setItem("playerNags",current_player_nags)
            enjoyhint_instance.run();    
        }
        
        
        showed_hint = true;
    }
            
  });

}

$(document).ready(function () {
  if (typeof(CoursePlayerV2) != "undefined") {
      playerGuide();
  }
});
