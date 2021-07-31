
function game_tick(){
    switch(game_status){
        case 1:
            collision_test();
            break;
        case 2:            
            break;
    }
}

function on_button_click(){
    switch(game_status){
        case 1:
            dino_jump();
            break;
        case 2:
            // catcus_program_id = genCatcus();
            // game_program_id = setInterval(game_tick,30);
            initial_game();
            break;
    }
}

function set_gameover(){
    if(catcus_program_id && game_program_id){
        game_status = 2;
        clearInterval(game_program_id);
        $("#point").html("GameOver! Point="+point);
    }
}

function get_point(){
    if(game_status==1){
        point += 1;
        $("#point").html(point);
    }    
}

function initial_game(){
    game_status = 1;
    point = 0;
    catcus_program_id = genCatcus();
    game_program_id = setInterval(game_tick,30);
    $("#point").html("Start!");
}

document.addEventListener('keypress',on_button_click);
initial_game();