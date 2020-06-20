function ageInDays() {
    let birthYear = prompt('Your date of birth?');
    let result = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode(`You are ${result} days old`);
    console.log(textAnswer);
    h1.setAttribute('id', 'ageInDays');
    console.log(h1);
    h1.appendChild(textAnswer);
    document.querySelector('#result-box').appendChild(h1);

}

function reset() {
    document.querySelector('#ageInDays').remove();
}