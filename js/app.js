let lists = document.querySelectorAll('li');
let input = document.querySelector('input[type=text]');
let deleteBtns = document.querySelectorAll('.dlt-btn');
let ul = document.querySelector('ul');
let toggler = document.querySelector('h1');
ul.addEventListener('click', function (e) {
    let targetElement = e.target;
    let selector = 'li';
    if (targetElement.tagName.toLowerCase() === selector) {
        targetElement.classList.toggle('done');
    }

    if (targetElement.tagName.toLowerCase() === 'i') {
        targetElement.parentElement.parentElement.classList.add('fade');
        setTimeout(() => {
            targetElement.parentElement.parentElement.remove();
        }, 1000);
    }
})

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        let todoText = this.value;
        if (todoText) {
            newLi = document.createElement('li');
            newLi.innerHTML = `<span class='dlt-btn'><i class="fa-solid fa-trash-can"></i></span> ${todoText}`
            ul.append(newLi);
        }
        this.value = '';
    }
})

toggler.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'i') {
        if (input.classList.contains('hide')) {
            setTimeout(() => {
                input.classList.remove('hide');
            }, 500);
        } else {
            input.classList.add('fade');
            if (input.classList.contains('show')) {
                input.classList.remove('show')
            }
            setTimeout(() => {
                input.classList.add('hide');
                input.classList.remove('fade');
            }, 1000);
        }

    }
})