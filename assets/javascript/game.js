var blastoise = {
    health: 100,
    attack: 9,
    base: 9,
    counter: 14
}
var charmeleon = {
    health: 80,
    attack: 8,
    base: 8,
    counter: 8
}
var bulbasaur = {
    health: 70,
    attack: 7,
    base: 7,
    counter: 7
}
var mewtwo = {
    health: 120,
    attack: 10,
    base: 10,
    counter: 12
}
var playerChoice = {
    char: "",
    health: 1,
    attack: 0,
    base: 0,
    counter: 0,
    wins: 0
}
var computer = {
    char: "",
    health: 0,
    attack: 0,
    counter: 0,
    chosen: false
}
var images = ["img0.png", "img1.png", "img2.png", "img3.png",]
var characters = [blastoise, charmeleon, bulbasaur, mewtwo];
var charactersnam = ["Blastoise", "Charmeleon", "Bulbasaur", "Mewtwo"];
function gameStart() {

    if (playerChoice.char === charactersnam[0]) {
        for (i = 1; i < characters.length; i++) {
            $('#players').html(" ");
            var div = $('<div>')
            var img = $('<img>');
            var txt = $('<h3>');
            var hp = $('<h2>');
            hp.addClass('cardtext');
            txt.addClass('cardtext');
            img.addClass("poke2 mr-1");
            div.addClass("enchar" + i);
            img.attr("src", "assets/images/" + images[i]);
            hp.text(characters[i].health.toString());
            txt.text(charactersnam[i]);
            div.addClass('work hvr-grow');
            div.append(hp);
            div.append(img);
            div.append(txt);
            $('#enemies').append(div);
        }
    }
    else if (playerChoice.char === charactersnam[1]) {
        var div = $('<div>')
        var img = $('<img>');
        var txt = $('<h3>');
        var hp = $('<h2>');
        hp.addClass('cardtext');
        txt.addClass('cardtext');
        img.addClass("poke2 mr-1");
        div.addClass("enchar" + 0);
        img.attr("src", "assets/images/" + images[0]);
        hp.text(characters[0].health.toString());
        txt.text(charactersnam[0]);
        div.addClass('work hvr-grow');
        div.append(hp);
        div.append(img);
        div.append(txt);
        $('#enemies').append(div);
        for (i = 2; i < characters.length; i++) {
            $('#players').html(" ");
            var div = $('<div>')
            var img = $('<img>');
            var txt = $('<h3>');
            var hp = $('<h2>');
            hp.addClass('cardtext');
            txt.addClass('cardtext');
            img.addClass("poke2 mr-1");
            div.addClass("enchar" + i);
            img.attr("src", "assets/images/" + images[i]);
            hp.text(characters[i].health.toString());
            txt.text(charactersnam[i]);
            div.addClass('work hvr-grow');
            div.append(hp);
            div.append(img);
            div.append(txt);
            $('#enemies').append(div);
        }
    }
    else if (playerChoice.char === charactersnam[2]) {
        var div = $('<div>')
        var img = $('<img>');
        var txt = $('<h3>');
        var hp = $('<h2>');
        hp.addClass('cardtext');
        txt.addClass('cardtext');
        img.addClass("poke2 mr-1");
        div.addClass("enchar" + 3);
        img.attr("src", "assets/images/" + images[3]);
        hp.text(characters[3].health.toString());
        txt.text(charactersnam[3]);
        div.addClass('work hvr-grow');
        div.append(hp);
        div.append(img);
        div.append(txt);
        $('#enemies').append(div);
        for (i = 1; i > -1; i--) {
            $('#players').html(" ");
            var div = $('<div>')
            var img = $('<img>');
            var txt = $('<h3>');
            var hp = $('<h2>');
            hp.addClass('cardtext');
            txt.addClass('cardtext');
            img.addClass("poke2 mr-1");
            div.addClass("enchar" + i);
            img.attr("src", "assets/images/" + images[i]);
            hp.text(characters[i].health.toString());
            txt.text(charactersnam[i]);
            div.addClass('work hvr-grow');
            div.append(hp);
            div.append(img);
            div.append(txt);
            $('#enemies').append(div);
        }
    }
    else if (playerChoice.char === charactersnam[3]) {
        for (i = 2; i > -1; i--) {
            $('#players').html(" ");
            var div = $('<div>')
            var img = $('<img>');
            var txt = $('<h3>');
            var hp = $('<h2>');
            hp.addClass('cardtext');
            txt.addClass('cardtext');
            img.addClass("poke2 mr-1");
            div.addClass("enchar" + i);
            img.attr("src", "assets/images/" + images[i]);
            hp.text(characters[i].health.toString());
            txt.text(charactersnam[i]);
            div.addClass('work hvr-grow');
            div.append(hp);
            div.append(img);
            div.append(txt);
            $('#enemies').append(div);
        }
    }
}
function attackButton() {
    var attack = $('<button>');
    attack.addClass("attack hvr-grow");
    attack.text("Attack");
    $('#attacks').html(attack)
}
//place characters
for (i = 0; i < characters.length; i++) {
    var div = $('<div>')
    var img = $('<img>');
    var txt = $('<h3>');
    var hp = $('<h2>');
    hp.addClass('cardtext');
    txt.addClass('cardtext');
    img.addClass("poke");
    div.addClass("char" + i);
    img.attr("src", "assets/images/" + images[i]);
    hp.text(characters[i].health.toString());
    txt.text(charactersnam[i]);
    div.addClass('work hvr-grow');
    div.append(hp);
    div.append(img);
    div.append(txt);
    $('#players').append(div);
}
$('body').on("click", ".char0", function () {
    playerChoice.char = charactersnam[0];
    playerChoice.health = blastoise.health;
    playerChoice.attack = blastoise.attack;
    playerChoice.counter = blastoise.counter;
    playerChoice.base = blastoise.base;
    var img = $('<img>');
    var health = $('<div>');
    health.addClass('health');
    health.text("Health: " + playerChoice.health);
    img.attr('src', 'assets/images/img0.png')
    img.addClass('battleimg');
    $('#char').html(img);
    $('#yourchar').append(health);
    gameStart();
})
$('body').on("click", ".char1", function () {
    playerChoice.char = charactersnam[1];
    playerChoice.health = charmeleon.health;
    playerChoice.attack = charmeleon.attack;
    playerChoice.counter = charmeleon.counter;
    playerChoice.base = charmeleon.base;
    var img = $('<img>');
    var health = $('<div>');
    health.addClass('health');
    health.text("Health: " + playerChoice.health);
    img.attr('src', 'assets/images/img1.png')
    img.addClass('battleimg');
    $('#char').html(img);
    $('#yourchar').append(health);
    gameStart();
})
$('body').on("click", ".char2", function () {    
    playerChoice.char = charactersnam[2];
    playerChoice.health = bulbasaur.health;
    playerChoice.attack = bulbasaur.attack;
    playerChoice.counter = bulbasaur.counter;
    playerChoice.base = bulbasaur.base;

    var img = $('<img>');
    var health = $('<div>');
    health.addClass('health');
    health.text("Health: " + playerChoice.health);
    img.attr('src', 'assets/images/img2.png')
    img.addClass('battleimg');
    $('#char').html(img);
    $('#yourchar').append(health);
    gameStart();
})
$('body').on("click", ".char3", function () {    
    playerChoice.char = charactersnam[3];
    playerChoice.health = mewtwo.health;
    playerChoice.attack = mewtwo.attack;
    playerChoice.counter = mewtwo.counter;
    playerChoice.base = mewtwo.base;

    var img = $('<img>');
    var health = $('<div>');
    health.addClass('health');
    health.text("Health: " + playerChoice.health);
    img.attr('src', 'assets/images/img3.png')
    img.addClass('battleimg');
    $('#char').html(img);
    $('#yourchar').append(health);
    gameStart();
})


$('body').on("click", ".enchar0", function () {
    if (computer.chosen === false) {
        $('enbattleimg').attr("opacity", "1.0");
        computer.chosen = true;
        computer.char = charactersnam[0];
        computer.health = blastoise.health;
        computer.attack = blastoise.attack;
        computer.counter = blastoise.counter;
        var img = $('<img>');
        var health = $('<div>');
        health.addClass('enhealth');
        health.text("Health: " + computer.health);
        health.attr("style","1.0");
        img.attr('src', 'assets/images/img0.png')
        img.addClass('enbattleimg');
        $('#defender').html(img);
        $('.enchar0').remove();
        $('.computer').append(health);
        attackButton();
    }
})
$('body').on("click", ".enchar1", function () {
    if (computer.chosen === false) {
        $('enbattleimg').attr("opacity", "1.0");
        computer.chosen = true;
        computer.char = charactersnam[1];
        computer.health = charmeleon.health;
        computer.attack = charmeleon.attack;
        computer.counter = charmeleon.counter;
        var img = $('<img>');
        var health = $('<div>');
        health.addClass('enhealth');
        health.attr("style","1.0");
        health.text("Health: " + computer.health);
        img.attr('src', 'assets/images/img1.png')
        img.addClass('enbattleimg');
        $('#defender').html(img);
        $('.enchar1').remove();
        $('.computer').append(health);
        $('enbattleimg').animate({opacity: "+=1.0"}, 100);
        attackButton();
    }
})
$('body').on("click", ".enchar2", function () {
    if (computer.chosen === false) {
        $('enbattleimg').attr("opacity", "1.0");

        computer.chosen = true;
        computer.char = charactersnam[2];
        computer.health = bulbasaur.health;
        computer.attack = bulbasaur.attack;
        computer.counter = bulbasaur.counter;
        var img = $('<img>');
        var health = $('<div>');
        health.addClass('enhealth');
        health.attr("style","1.0");
        health.text("Health: " + computer.health);
        img.attr('src', 'assets/images/img2.png')
        img.addClass('enbattleimg');
        $('#defender').html(img);
        $('.enchar2').remove();
        $('.computer').append(health);
        $('enbattleimg').animate({opacity: "+=1.0"}, 100);
        attackButton();
    }
})
$('body').on("click", ".enchar3", function () {
    if (computer.chosen === false) {
        $('enbattleimg').attr("opacity", "1.0");

        computer.chosen = true;
        computer.char = charactersnam[3];
        computer.health = mewtwo.health;
        computer.attack = mewtwo.attack;
        computer.counter = mewtwo.counter;
        var img = $('<img>');
        var health = $('<div>');
        health.addClass('enhealth');
        health.attr("style","1.0");
        health.text("Health: " + computer.health);
        img.attr('src', 'assets/images/img3.png')
        img.addClass('enbattleimg');
        $('#defender').html(img);
        $('.enchar3').remove();
        $('.computer').append(health);
        $('enbattleimg').animate({opacity: "+=1.0"}, 100);
        attackButton();
    }
    })
    var attacking = false;
$('body').on("click", ".attack", function () {
    if(attacking === false && computer.chosen === true){
        attacking = true;
    computer.health -= playerChoice.attack;
    playerChoice.attack += playerChoice.base;
   
    $(".battleimg").animate({ left: "+=50" }, 100, function () {
        $(".battleimg").animate({ left: "-=50px" }, 75);
    });
    var enhealth = $('.enhealth').text("Health: " + computer.health);
    $('.enhealth').append(enhealth);

    function enattack(){
        $(".enbattleimg").animate({ left: "-=50" }, 100, function () {
            $(".enbattleimg").animate({ left: "+=50px" }, 75);
        });
        playerChoice.health -= computer.counter;
        if(playerChoice.health < 0){
            playerChoice.health = 0;
        }
        var health = $('.health').text("Health: " + playerChoice.health);
        $('.health').append(health);
        attacking = false;
    }
    setTimeout(enattack,1000);
    if(computer.health <= 0){
        playerChoice.wins++;
        $('.enhealth').animate({opacity: "-=1.0"},3000)
        $('.enbattleimg').animate({opacity: "-=1.0"},3000)
        alert("You defeated " + computer.char)
        $('.enhealth').remove();
        computer.chosen = false;
        if(playerChoice.wins >= 3){
            playerChoice.wins = 0;
            playerChoice.char = "";
            playerChoice.health = 0;
            playerChoice.attack = 0;
            playerChoice.counter = 0;
            playerChoice.base = 0;
            $('.health').remove();
            $('#char').empty();
            $('#enemies').empty();
            $('#attacks').empty();
            for (i = 0; i < characters.length; i++) {
                var div = $('<div>')
                var img = $('<img>');
                var txt = $('<h3>');
                var hp = $('<h2>');
                hp.addClass('cardtext');
                txt.addClass('cardtext');
                img.addClass("poke");
                div.addClass("char" + i);
                img.attr("src", "assets/images/" + images[i]);
                hp.text(characters[i].health.toString());
                txt.text(charactersnam[i]);
                div.addClass('work hvr-grow');
                div.append(hp);
                div.append(img);
                div.append(txt);
                $('#players').append(div);
            }
            gameStart();
            alert("You won! Click to play again!")
        }
    }
    else if(playerChoice.health <= 0){
        alert("You Lost! Click to start over");
                playerChoice.wins = 0;
            computer.chosen = false;
                playerChoice.char = "";
                playerChoice.health = 0;
                playerChoice.attack = 0;
                playerChoice.counter = 0;
                playerChoice.base = 0;
                $('.health').remove();
                $('.enhealth').empty();
                $('#char').empty();
                $('#enemies').empty();
                $('#attacks').empty();
                $('#defender').empty();
                for (i = 0; i < characters.length; i++) {
                    var div = $('<div>')
                    var img = $('<img>');
                    var txt = $('<h3>');
                    var hp = $('<h2>');
                    hp.addClass('cardtext');
                    txt.addClass('cardtext');
                    img.addClass("poke");
                    div.addClass("char" + i);
                    img.attr("src", "assets/images/" + images[i]);
                    hp.text(characters[i].health.toString());
                    txt.text(charactersnam[i]);
                    div.addClass('work hvr-grow');
                    div.append(hp);
                    div.append(img);
                    div.append(txt);
                    $('#players').append(div);
                    gameStart();
                }
                
            }
        }
})