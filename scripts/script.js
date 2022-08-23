const buttonMan = document.querySelector('.header__gender--male');
const buttonWoman = document.querySelector('.header__gender--female');
const body = document.body;

const state = {
  gender: body.classList.contains('woman') ? 'woman' : 'man'
};

console.log(state.gender);

const changeToMan = () => {
  if(state.gender !== 'man') {
    body.classList.add('man');
    body.classList.remove('woman');
    state.gender = 'man';
  }
}

const changeToWoman = () => {
  if(state.gender !== 'woman') {
    body.classList.add('woman');
    body.classList.remove('man');
    state.gender = 'woman';
  }
}

buttonMan.addEventListener('click', changeToMan);

buttonWoman.addEventListener('click', changeToWoman);