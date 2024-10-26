document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelector('.messages');
    const messageInput = document.querySelector('.message-input');
    const sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messages.appendChild(messageElement);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendBtn.click();
        }
    });
});
