function dino_jump(){
    $(".dino").addClass("jump");
    setTimeout(function(){
        $(".dino").removeClass("jump");
    },500);
}

var catcus_id=1;

function genCatcus(){
    $(".dino-game").append('<div class="catcus" id="catcus'+catcus_id+'"> </div>');
    setTimeout(function(remove_id){
        $("#catcus"+remove_id).remove();
        point += 1;
    },1250,catcus_id);

    catcus_id+=1;
    let min_duration = 0.7;
    let max_addon = 0.5;
    let waitTime = Math.random()*(max_addon)+min_duration;
    if(game_status==1){
        return setTimeout(genCatcus,waitTime*1000);
    }else{
        return;
    }
    
}

// var dino_left = window.getComputedStyle(document.getElementsByClassName('dino')[0]).getPropertyValue('left');
// var dino_right = window.getComputedStyle(document.getElementsByClassName('dino')[0]).getPropertyValue('right');
// console.log(dino_left,dino_right);
function collision_test(){
    let catcus_left =  parseInt(window.getComputedStyle(document.getElementsByClassName('catcus')[0]).getPropertyValue('left'));
    let dino_top = parseInt(window.getComputedStyle(document.getElementsByClassName('dino')[0]).getPropertyValue('top'));
    let dino_down = dino_top+70;
    // console.log(dino_down,catcus_left,catcus_left);
    if(dino_down>310 && ((catcus_left>120)&&catcus_left<150)){
        console.log('game over',point);
        set_gameover();
    }
}

// document.addEventListener('keypress',dino_jump);
// genCatcus();
// setInterval(collision_test,30);
// collision_test();