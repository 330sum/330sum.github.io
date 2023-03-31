// DOM
const $background = document.querySelector('.background > ul');
// console.log(background);

// Setting
const GAME_COLS = 20; // 가로
const GAME_ROWS = 9; // 세로

let score = 0;
let tempMovingCat;
let tempMovingFish;
let catX;
let catY;


function col() {
    return Math.floor(Math.random() * 20);
}

function row() {
    return Math.floor(Math.random() * 9);
}

const BLOCKS = {
    cat: [
        [8, 5],
    ],
    fish: [
        [col(), row()],
    ]
}



// 고양이 객체
const movingCat = {
    name: '냥냥이',
    type: 'cat',
    left: 0,
    top: 0
}

// 물고기 객체
const movingFish = {
    name: '물고기',
    type: 'fish',
}


// 게임시작
function init() {
    tempMovingCat = {
        ...movingCat
    };
    tempMovingFish = {
        ...movingFish
    };
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine()
    }

    drawCat();
    drawFish();

}

// 새로운 행 만드는 함수
function prependNewLine() {
    const $li = document.createElement('li');
    const $ul = document.createElement('ul');
    for (let j = 0; j < GAME_COLS; j++) {
        const nemo = document.createElement('li');
        $ul.prepend(nemo);
    }
    $li.prepend($ul);
    $background.prepend($li);
}

// 고양이 이동하는 함수
function drawCat() {
    const {
        type,
        left,
        top
    } = tempMovingCat;
    const movingBlocks = document.querySelectorAll('.moving')
    movingBlocks.forEach(moving => {
        moving.classList.remove(type, 'moving')
    })
    BLOCKS[type].forEach(block => {
        catX = block[0] + left;
        catY = block[1] + top;
        // console.log({$background});

        // 범위 넘어가면 null
        const target = $background.children[catY] ? $background.children[catY].children[0].children[catX] : null;
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
            target.classList.add(type, 'moving');
        } else {
            tempMovingCat = {
                ...movingCat
            }
            setTimeout(() => {
                drawCat();
            }, 0)
        }


        // 고양이가 물고기 먹는 함수
        checkMatch();
        drawFish();

        function checkMatch() {
            if (catX === BLOCKS.fish[0][0] && catY === BLOCKS.fish[0][1]) {
                BLOCKS.fish[0].pop();
                console.log(BLOCKS.fish[0].pop());
                target.classList.remove('fish');

                let $score = document.querySelector('.score');
                let jumsu = ++score;
                $score.textContent = jumsu;
                console.log(jumsu);
            }

        }


    })
    movingCat.left = left;
    movingCat.top = top;

}

// 방향키 동작시, 고양이 방향키 만큼 이동하는 함수
function moveBlock(moveType, amount) {
    tempMovingCat[moveType] += amount;
    drawCat()
}


function checkEmpty(target) {
    if (!target) {
        return false;
    }
    return true;
}



// 방향키 동작
document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 39:
            moveBlock('left', 1);
            break;
        case 37:
            moveBlock('left', -1);
            break;
        case 38:
            moveBlock('top', -1);
            break;
        case 40:
            moveBlock('top', 1);
            break;
        default:
            break;
    }
    // console.log(e);
})




// 물고기 위치
function drawFish() {
    const {
        type,
    } = tempMovingFish;



    BLOCKS[type].forEach(block => {
        fishX = block[0];
        fishY = block[1];

        // console.log(fishX, fishY);

        const target = $background.children[fishY] ? $background.children[fishY].children[0].children[fishX] : BLOCKS.fish[0].push(col(), row());
        target.classList.add(type);

    })

}


// 카운트다운
countdown();

function countdown() {
    let seconds = 60;

    function tick() {
        let $counter = document.querySelector('.counter');
        seconds--;
        $counter.innerHTML = seconds + '초';
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            const $finish = document.getElementById('finish');
            $finish.classList.add('show');

        }
    }
    tick();
}




// 가짜물고기 내려오는 함수 

setInterval(() => {
    let n = Math.floor(Math.random() * 10) + 1;
    const $layer = document.querySelector(`.fish-box .layer:nth-child(${n})`);
    const $newLayer = document.createElement(`div`);
    $newLayer.innerHTML = '<img src=../images/fish3.png>';
    $newLayer.classList.add(`fish`)
    $newLayer.classList.add(`fall`);
    $layer.appendChild($newLayer);
    console.log($layer);
}, 1000);









// 게임시작
init();