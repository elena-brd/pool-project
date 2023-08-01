const form = document.querySelector('.form-input');
const allertMsg = document.querySelector('.allert-message');
const card = document.querySelector('.title');
const btn = document.querySelector('.btn');


const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);


function selectFramework(e) {
    e.preventDefault();

    const selectOption = document.querySelector("input[name='poll-option']:checked");
    if (!selectOption) {
        const p = document.createElement('p');
        p.textContent = 'Please choose one framework';
        p.classList.add('allert-message');
        card.appendChild(p);
        setTimeout(() => p.remove(), 3000);
        return;
    }

    const votes = poll.get(selectOption.value);
    poll.set(selectOption.value, votes + 1);
    console.log(votes);
    document.querySelectorAll('input, button ').forEach((el) => el.setAttribute('disabled', true));

    displayVotes();
}

function displayVotes() {
    for (let [option, votes] of poll) {
        const list = document.createElement('p');
        list.style.fontSize = '1.1rem';
        list.style.margin = '2rem 1rem';
        list.classList.add('results');
        list.innerHTML = `${option} - ${votes}`;
        form.appendChild(list)
    }
}

form.addEventListener('submit', selectFramework);



