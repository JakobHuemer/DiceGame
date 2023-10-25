let players = {
    p1: {
        name: 'Player 1',
        character: 'knight',
        characterName: 'Sir Aegis',
        health: 0,
        attack: 0,
        currentDiceRoll: null,
    },
    p2: {
        name: 'Player 2',
        character: 'knight',
        characterName: 'Sir Aegis',
        health: 0,
        attack: 0,
        currentDiceRoll: null,
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


// get random characters
let keys = Object.keys(characters);
const tempCh1 = characters[Object.keys(characters)[0]];
const tempCh2 = characters[Object.keys(characters)[0]];

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

                    <span class="character-description">${ tempCh2.description }</span>

                </div>
            </div>
            <img alt="START" class="start disabled" onclick="startGame()" src="assets/img/keys/key-start.png">`;
updateProgressBars();


// Selecting random start character

const randCh1 = Math.floor(Math.random() * 7) + 1;
const randCh2 = Math.floor(Math.random() * 7) + 1;
console.log(randCh1);
console.log(randCh2);

for (let i = 0; i < randCh1; i++) {
    selectPrev('p1');
}

for (let i = 0; i < randCh2; i++) {
    selectPrev('p2');
}

setTimeout(() => {
    $A('.player-slot-carousel .player-slot').forEach(slot => {
        slot.style.transition = 'left .3s, top .3s, scale .3s cubic-bezier(0,1.03,.79,1.01)';
    });
}, 100);


$('#p1-name').addEventListener('input', onInput);
$('#p2-name').addEventListener('input', onInput);


function onInput(e) {
    if ($('#p1-name').value.length > 0 && $('#p2-name').value.length > 0) {
        $('.start').classList.replace('disabled', 'enabled');
    } else {
        $('.start').classList.replace('enabled', 'disabled');
    }
}


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
    players[suffix].characterName = characters[players[suffix].character].name;
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


const gameSettings = {
    both: false,
    auto: false,
};

function toggleSetting(toToggle) {
    console.log(toToggle);
    return gameSettings[toToggle] = !gameSettings[toToggle];
}


function startGame() {

    players.p1.name = $('#p1-name').value;
    players.p2.name = $('#p2-name').value;

    players.p1.health = characters[players.p1.character].health;
    players.p1.attack = characters[players.p1.character].attack;

    players.p2.health = characters[players.p2.character].health;
    players.p2.attack = characters[players.p2.character].attack;

    console.log(players.p1.name);
    $('.game-container').innerHTML = `
        <div class="action-container">
            <div class="action-section action-section-p1">
                <img alt="knight" class="ch-img" src="assets/img/fighters/thumbnails/fighter-${ players.p1.character }-profile.jpg">
                <div class="name-percentage">
                    <span class="name">${ players.p1.name }</span>
                    <span class="live-percentage">100%</span>
                </div>
                <div class="live-bar">
                    <div class="live-bar-live"></div>
                </div>
                <div class="footer">
                    <span class="character-name">${ players.p1.characterName }</span>
                    <span class="live-fraction">${ players.p1.health }/${ players.p1.health }</span>
                </div>
            </div>

            <div class="action-section action-section-p2">
                <img alt="mage" class="ch-img" src="assets/img/fighters/thumbnails/fighter-${ players.p2.character }-profile.jpg">
                <div class="name-percentage">
                    <span class="name">${ players.p2.name }</span>
                    <span class="live-percentage">100%</span>
                </div>
                <div class="live-bar">
                    <div class="live-bar-live"></div>
                </div>
                <div class="footer">
                    <span class="character-name">${ players.p2.characterName }</span>
                    <span class="live-fraction">${ players.p2.health }/${ players.p2.health }</span>
                </div>
            </div>
        </div>
        
        <div class="ctrl-dock">
            <div class="time-remaining"></div>
            <div class="dice dice-p1" onclick="newDice('p1')">
                <img alt="?" class="dice" src="assets/img/dice/dice-q.png">
            </div>

            <div class="mode-check mode-check-auto" data-checked="false" data-prop="auto">
                <div class="checkbox checkbox-mode-auto"></div>
                <span class="checkbox-desc">Auto</span>
            </div>

            <div class="mode-check mode-check-both" data-checked="false" data-prop="both">
                <div class="checkbox checkbox-mode-both"></div>
                <span class="checkbox-desc">Both</span>
            </div>

            <div class="dice dice-p2" onclick="newDice('p2')">
                <img alt="?" class="dice" src="assets/img/dice/dice-q.png">
            </div>

        </div>`;


    document.querySelectorAll('*[data-prop]').forEach(item => {
        item.setAttribute('onclick',
            'this.setAttribute(\'data-checked\', toggleSetting(this.getAttribute(\'data-prop\')))');
    });

    players.p1.currentDiceRoll = null;
    players.p2.currentDiceRoll = null;

    $('head').innerHTML += `<style>
    .carousels .player-slot-carousel > * {
        /*transform: scale(80%);*/
        scale: .8;
        left: -5%;
    }
    </style>`;

    $('.start').removeAttribute('onclick');

    $('.selection-pane').animate([{
        bottom: '0',
    }, {
        bottom: '-100%',
    }], {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-in-out',
        iterations: 1,
    });


    setTimeout(() => {
        $('.character-selection').remove();
    }, 501);
    // $('.selection-pane').remove();

    $A('.player-slot').forEach(slot => {
        //     remove every slot that is not order-1-p1 or p2
        if (!slot.classList.contains('order-1-p1') && !slot.classList.contains('order-1-p2')) {
            slot.remove();
        }
    });

    console.log(players);

}

function tie() {
    $('.damage-display-tie').animate([{
        transform: 'translateY(0%) translateX(-50%)',
        opacity: 1,
    }, {
        transform: 'translateY(150%) translateX(-50%)',
        opacity: 0,
    }], {
        duration: 1200,
        easing: 'linear',
        iterations: 1,
    });
}


function damage(receiver, dmgAmount) {
    let maxHealth = characters[players[receiver].character].health;
    let currentHealth = players[receiver].health;
    let newHealth = (currentHealth - dmgAmount) < 0 ? 0 : (currentHealth - dmgAmount);
    let percent = newHealth / maxHealth;
    players[receiver].health = newHealth;

    console.log(percent);

    $('.action-section-' + receiver + ' .live-percentage').innerHTML = Math.round(percent * 100) + '%';
    $('.action-section-' + receiver + ' .live-fraction').innerHTML = newHealth + '/' + maxHealth;
    $('.action-section-' + receiver + ' .live-bar-live').animate([{
        width: percent * 100 + '%',
    }], {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-in-out',
        iterations: 1,
    });

    $('.damage-display-' + receiver).innerHTML = '-' + dmgAmount;

    $('.damage-display-' + receiver).animate([{
        transform: 'translateY(0%)',
        opacity: 1,
    }, {
        transform: 'translateY(200%)',
        opacity: 0,
    }], {
        duration: 1000,
        easing: 'linear',
        iterations: 1,
    });
}

function end(winner) {

    setTimeout(() => {
        $('.ctrl-dock').animate([{
            transform: 'translateY(200%) translateX(-50%)',
        }], {
            duration: 400,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1,
        });
    }, 1000);


    if (winner === 'p1') {
        $('.player-slot-carousel.p1').animate([{
            transform: 'translate(0, -10%)',
        }], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1,
        });

        $('.player-slot-carousel.p2').animate([{
            left: '100%',
        }], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1,
        });

    } else {
        $('.player-slot-carousel.p2').animate([{
            left: 0,
            top: '-10%',
            position: 'absolute',
        }], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1,
        });

        $('.player-slot-carousel.p1').animate([{
            transform: 'translate(-190%, 0)',
        }], {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1,
        });
    }

    $('.win-title').innerHTML = players[winner].name + ' wins!';
    $('.win-title').animate([{
        bottom: '3%',
    }], {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-in-out',
        iterations: 1,
    });

}

function newDice(player) {

    $('.dice-' + player).setAttribute('onclick', '');

    const num = Math.floor(Math.random() * 6) + 1;

    players[player].currentDiceRoll = num;

    if (gameSettings.both && players[player === 'p1' ? 'p2' : 'p1'].currentDiceRoll === null) {
        newDice(player === 'p1' ? 'p2' : 'p1', false);
    }

    $('.dice-' + player).animate([
        {
            transform: 'rotate(720deg)',
        },
    ], {
        duration: 400,
        easing: 'ease-in-out',
        iterations: 1,
    });


    setTimeout(() => {
        console.log('EAE');
        console.log(num);
        $('.dice-' + player + ' .dice').setAttribute('src',
            `assets/img/dice/dice-${ num }.png`);
    }, 200);

    if (players[player === 'p1' ? 'p2' : 'p1'].currentDiceRoll !== null) {
        // both have rolled

        $('.time-remaining').animate([
            {
                width: '100%',
            },
            {
                width: '0%',
            }], {
            duration: 2500,
            easing: 'linear',
            iterations: 1,
        });

        if (players.p1.currentDiceRoll > players.p2.currentDiceRoll) {
            damage('p2', players.p1.attack);
            console.log('damage to p2');
        } else if (players.p1.currentDiceRoll < players.p2.currentDiceRoll) {
            damage('p1', players.p2.attack);
            console.log('damage to p1');
        } else {
            // tie
            tie();
            console.log('tie');
        }

        console.log(players.p1.health);
        console.log(players.p2.health);

        if (players.p1.health === 0 || players.p2.health === 0) {
            end(players.p1.health === 0 ? 'p2' : 'p1');
            return;
        }

        //     reset their values
        players.p1.currentDiceRoll = null;
        players.p2.currentDiceRoll = null;

        setTimeout(() => {
            // return the onclicks
            console.log('returning onclicks');

            $('.dice-' + player).setAttribute('onclick', 'newDice(\'' + player + '\')');
            $('.dice-' + (player === 'p1' ? 'p2' : 'p1'))
                .setAttribute('onclick', 'newDice(\'' + (player === 'p1' ? 'p2' : 'p1') + '\')');

            if (gameSettings.auto) {
                newDice('p1');
            }
        }, 2600);
    } else if (gameSettings.auto && !gameSettings.both) {
        setTimeout(() => {
            newDice(player === 'p1' ? 'p2' : 'p1');
        }, 1400);
    }

}


function $(str) {
    return document.querySelector(str);
}

function $A(str) {
    return document.querySelectorAll(str);
}