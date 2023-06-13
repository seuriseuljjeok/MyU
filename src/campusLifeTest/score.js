let storage = sessionStorage;
let score = 0

const calc = (answer, nextPage) => {
    location.href = `test${nextPage}.html`;
    score = Number(storage.getItem('score'));
    //정답일때
    if (answer) {
        score += 1;
    }
    else { //오답일 때
        score = score;
    }
    // alert(score);
    storage.setItem('score',score);
}

const goTo = (answer) => {
    score = Number(storage.getItem('score'));
    //정답일때
    if (answer) {
        score += 1;
    }
    else { //오답일 때
        score = score;
    }
    // alert(score);
    storage.setItem('score',score);
    
    switch(score){
        case 1,2 : location.href = `result${nextPage}.html`; break;
        case 3,4 : location.href = `result${nextPage}.html`; break;
        case 5,6 : location.href = `result${nextPage}.html`; break;
        case 7,8,9 : location.href = `result${nextPage}.html`; break;
        case 0,10 : location.href = `result${nextPage}.html`; break;
    }
    
}

