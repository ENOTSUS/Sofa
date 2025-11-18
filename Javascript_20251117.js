/**
 * Создаёт плавающие сердечки на всей странице.
 */
function createHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['♥', '💕', '🌸', '⚘'];

    for (let i = 0; i < 405; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 65%)`;
        container.appendChild(heart);
    }
}
/**
 * Создаёт плавающие сердечки на странице.
 */

/**
 * Показывает сцену с предложением.
 */
function showNextScene() {
    document.querySelector('.choices').style.display = 'none';
    document.getElementById('proposal-scene').style.display = 'block';
}

/**
 * Показывает романтическую сцену с изменённым текстом.
 */
function showRomanticScene() {
    document.querySelector('.choices').style.display = 'none';
    document.getElementById('proposal-scene').style.display = 'block';
    document.querySelector('.dialogue-text').innerHTML = `
        Иногда в истории нужно делать смелый выбор...<br><br>
        <span class="heart">♥</span> Ты - та, с кем я хочу пройти все сюжетные линии жизни.
        Стань моей героиней навсегда? <span class="heart">♥</span>
    `;
}

/**
 * Обрабатывает отправку романтического послания.
 * Проверяет, что поле не пустое, и создаёт попап на всю страницу.
 */
function sendProposal() {
    const message = document.getElementById('romanticText').value;
    if (message.trim() === '') {
        alert('Напиши своё романтичное послание! Это сделает момент особенным 💖');
        return;
    }

    // Создаем попап на всю страницу
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.95);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        z-index: 1000;
        overflow-y: auto;
    `;

    // Внутренний контейнер для контента
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        max-width: 800px;
        width: 100%;
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        text-align: center;
        border: 3px solid #ff6b93;
    `;

    popupContent.innerHTML = `
        <div style="font-size: 3em; margin-bottom: 20px;">🎀</div>
        <h2 style="color: #ff6b93; margin-bottom: 20px; font-size: 2em;">Твоё послание отправлено!</h2>
        <p style="color: #555; line-height: 1.6; margin-bottom: 30px; font-size: 1.2em;">
            "${message}"<br><br>
            💖 Это начало новой прекрасной главы! 💖
        </p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            padding: 15px 40px;
            background: #ff6b93;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1em;
            cursor: pointer;
            transition: transform 0.2s;
        ">Закрыть</button>
    `;

    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}

/**
 * Инициализация при загрузке страницы.
 * Создаёт сердечки и позволяет добавить имя в placeholder.
 */
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
});
