//  Progress Bars (Health and Attack)
// noinspection JSJQueryEfficiency

let players = {
    p1: {
        name: 'Player 1',
        character: 'knight',
        health: 0,
        attack: 0,
    },
    p2: {
        name: 'Player 2',
        character: 'knight',
        health: 0,
        attack: 0,
    },
};

const characters = {
    knight: {
        name: 'Sir Aegis',
        type: 'knight',
        health: 200,
        attack: 20,
        description: 'A noble knight skilled in swordplay and known for his unyielding defense.',
    },
    mage: {
        name: 'Elara Starfire',
        type: 'mage',
        health: 100,
        attack: 40,
        description: 'A powerful mage with command over shadows, casting devastating spells in battles.',
    },
    ogre: {
        name: 'Shrek',
        type: 'ogre',
        health: 150,
        attack: 30,
        description: 'A hulking ogre with incredible strength and a penchant for crushing foes in his path.',
    },
    angel: {
        name: 'Seraphiel',
        type: 'angel',
        health: 175,
        attack: 50,
        description: 'An angelic being blessed with divine powers, healing allies and smiting enemies.',
    },
    demon: {
        name: 'Draegon',
        type: 'demon',
        health: 160,
        attack: 45,
        description: 'A fearsome demon who wields the fires of hell, scorching all who oppose him.',
    },
    admin: {
        name: 'Administrator',
        type: 'admin',
        health: 250,
        attack: 60,
        description: 'An all-powerful admin with the ability to control the game world, both feared and respected.',

    },
};


function onInput(e) {
    if ($('#p1-name').value.length > 0 && $('#p2-name').value.length > 0) {
        $('.start').style.display = 'block';
    } else {
        $('.start').style.display = 'none';
    }
}


window.addEventListener('DOMContentLoaded', () => {

    // get random characters
    let keys = Object.keys(characters);
    const tempCh1 = characters['knight'];
    const tempCh2 = characters['mage'];

    $('.selection-pane').innerHTML = `<div class="players-select">

                <div class="select select-1 select-p1">
                    <input class="name" id="p1-name" name="name" placeholder="Player 1" type="text">

                    <div class="character-select">
                        <span class="character-select-prev" onclick="selectPrev('p1')">&lt;</span>
                        <div class="character-select-info">
                            <span class="character-name">${ tempCh1.name }</span>
                            <span class="character-type">${ tempCh1.type }</span>
                        </div>
                        <span class="character-select-next" onclick="selectNext('p1')">&gt;</span>
                    </div>

                    <div class="stat-attack">
                        <img alt="Atk." class="stat-attack-icon" src="assets/img/attack-icon.png">
                        <div class="percent-bar" data-color="#00FFC2" data-filled="${ tempCh1.attack },20,60"></div>
                        <span class="stat-attack-value">${ tempCh1.attack }</span>
                    </div>

                    <div class="stat-health">
                        <img alt="HP" class="stat-health-icon" src="assets/img/health-icon.png">
                        <div class="percent-bar" data-color="#FF0000" data-filled="${ tempCh1.health },100,250"></div>
                        <span class="stat-health-value">${ tempCh1.health }</span>
                    </div>

<!--                    <div class="battle-kit">-->
<!--                        <div class="attacks">-->
<!--                            <div class="attack">-->
<!--                                <img alt="Sword" src="assets/img/attack-icon.png">-->
<!--                                <div class="description">-->
<!--                                    <span class="title">Sword Slash</span>-->
<!--                                    <span class="text">Sir Aegis strikes with his long sword</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="abilities">-->
<!--                            <div class="ability">-->
<!--                                <img alt="ShieldBlock" src="assets/img/attack-icon.png">-->
<!--                                <div class="description">-->
<!--                                    <span class="title">Shield Block</span>-->
<!--                                    <span class="text">Sir Aegis stuns his opponent with his big shield.</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                    <span class="character-description">${ tempCh1.description }</span>

                </div>
                <div class="select select-2 select-p2">
                    <!--                same as select 1-->

                    <input class="name name2" id="p2-name" name="name2" placeholder="Player 2" type="text">

                    <div class="character-select">
                        <span class="character-select-prev" onclick="selectPrev('p2')">&lt;</span>
                        <div class="character-select-info">
                            <span class="character-name">${ tempCh2.name }</span>
                            <span class="character-type">${ tempCh2.type }</span>
                        </div>
                        <span class="character-select-next" onclick="selectNext('p2')">&gt;</span>
                    </div>

                    <div class="stat-attack">
                        <img alt="Atk." class="stat-attack-icon" src="assets/img/attack-icon.png">
                        <div class="percent-bar" data-color="#00FFC2" data-filled="${ tempCh2.attack },20,60"></div>
                        <span class="stat-attack-value">${ tempCh2.attack }</span>
                    </div>

                    <div class="stat-health">
                        <img alt="HP" class="stat-health-icon" src="assets/img/health-icon.png">
                        <div class="percent-bar" data-color="#FF0000" data-filled="${ tempCh2.health },100,250"></div>
                        <span class="stat-health-value">${ tempCh2.health }</span>
                    </div>

<!--                    <div class="battle-kit">-->
<!--                        <div class="attacks">-->
<!--                            <div class="attack">-->
<!--                                <img alt="Sword" src="assets/img/attack-icon.png">-->
<!--                                <div class="description">-->
<!--                                    <span class="title">Sword Slash</span>-->
<!--                                    <span class="t
ext">Sir Aegis strikes with his long sword</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="abilities">-->
<!--                            <div class="ability">-->
<!--                                <img alt="ShieldBlock" src="assets/img/attack-icon.png">-->
<!--                                <div class="description">-->
<!--                                    <span class="title">Shield Block</span>-->
<!--                                    <span class="text">Sir Aegis stuns his opponent with his big shield.</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                    <span class="character-description">${ tempCh2.description }</span>

                </div>
            </div>


            <img alt="START" class="start" onclick="startGame()" src="assets/img/keys/key-start.png"
                 style="display: none">`;
    updateProgressBars();

    $('#p1-name').addEventListener('input', onInput);
    $('#p2-name').addEventListener('input', onInput);
});

function updateProgressBars() {
    document.querySelectorAll('.percent-bar').forEach(bar => {
        let numbers = bar.getAttribute('data-filled').split(',');
        let width = (numbers[0] - numbers[1] * 0.9) / (numbers[2] * 1.1 - numbers[1] * 1.1);

        if (bar.innerHTML === '') {
            bar.innerHTML = `<div class="percent-bar-progress" style="background: ${ bar.getAttribute('data-color') }"></div>`;
        }
        // bar.innerHTML = `<div class="percent-bar-progress"
        // style="width: ${ width * 100 }%; background: ${ bar.getAttribute('data-color') }"
        // ></div>`;
        bar.querySelector('*').animate([{
            width: `${ width * 100 }%`,
        }], {
            duration: 200,
            fill: 'both',
            easing: 'ease-in-out',
        });
    });
}

//  Character Idle Animation
document.querySelectorAll('.character-idle').forEach(character => {
    // character.style.position = 'relative';
    character.animate(
        [
            { transform: `translateY(2%)` },
        ],
        {
            duration: 1000,
            fill: 'both',
            direction: 'alternate-reverse',
            easing: 'ease-in-out',
            iterations: Infinity,
        },
    );
});


function selectNext(suffix) {

    console.log('next');
    $('.order-1-' + suffix).classList.replace('order-1-' + suffix, 'order-99-' + suffix);
    $('.order-6-' + suffix).classList.replace('order-6-' + suffix, 'order-1-' + suffix);
    $('.order-5-' + suffix).classList.replace('order-5-' + suffix, 'order-6-' + suffix);
    $('.order-4-' + suffix).classList.replace('order-4-' + suffix, 'order-5-' + suffix);
    $('.order-3-' + suffix).classList.replace('order-3-' + suffix, 'order-4-' + suffix);
    $('.order-2-' + suffix).classList.replace('order-2-' + suffix, 'order-3-' + suffix);
    $('.order-99-' + suffix).classList.replace('order-99-' + suffix, 'order-2-' + suffix);


    changeCharacter(suffix);
}

function selectPrev(suffix) {
    $('.order-1-' + suffix).classList.replace('order-1-' + suffix, 'order-99-' + suffix);
    $('.order-2-' + suffix).classList.replace('order-2-' + suffix, 'order-1-' + suffix);
    $('.order-3-' + suffix).classList.replace('order-3-' + suffix, 'order-2-' + suffix);
    $('.order-4-' + suffix).classList.replace('order-4-' + suffix, 'order-3-' + suffix);
    $('.order-5-' + suffix).classList.replace('order-5-' + suffix, 'order-4-' + suffix);
    $('.order-6-' + suffix).classList.replace('order-6-' + suffix, 'order-5-' + suffix);
    $('.order-99-' + suffix).classList.replace('order-99-' + suffix, 'order-6-' + suffix);

    changeCharacter(suffix);
}

function changeCharacter(suffix) {
    players[suffix].character = $('.order-1-' + suffix).getAttribute('data-chr');
    $('.select-' + suffix + ' .character-name').innerHTML = characters[players[suffix].character].name;
    $('.select-' + suffix + ' .character-type').innerHTML = characters[players[suffix].character].type;
    $('.select-' + suffix + ' .stat-health .percent-bar').setAttribute('data-filled', `${ characters[players[suffix].character].health },100,250`);
    $('.select-' + suffix + ' .stat-health .stat-health-value').innerHTML = characters[players[suffix].character].health;

    $('.select-' + suffix + ' .stat-attack .percent-bar').setAttribute('data-filled', `${ characters[players[suffix].character].attack },20,60`);
    $('.select-' + suffix + ' .stat-attack .stat-attack-value').innerHTML = characters[players[suffix].character].attack;

    $('.select-' + suffix + ' .character-description').innerHTML = characters[players[suffix].character].description;

    console.log(players[suffix]);
    updateProgressBars();
}

function startGame() {

    players.p1.name = $('#p1-name').value;
    players.p2.name = $('#p2-name').value;

    players.p1.health = characters[players.p1.character].health;
    players.p1.attack = characters[players.p1.character].attack;

    players.p2.health = characters[players.p2.character].health;
    players.p2.attack = characters[players.p2.character].attack;

    console.log(players);

    let blackCover = $('#black-cover');
}


function $(str) {
    return document.querySelector(str);
}