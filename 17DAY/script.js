const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        //pega a posição do click na tela como um todo
        const x = e.clientX;
        const y = e.clientY;

        //pega a posição do botão na tela
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //posição do click na tela - posição do botão
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        //this não funciona com arrow function
        this.appendChild(circle);

        //remove os spans que foram adicionandos ao clicar
        setTimeout(() => circle.remove(), 500);
    });
});