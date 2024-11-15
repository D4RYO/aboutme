function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();
const clockElement = document.getElementById('clock');
clockElement.style.position = 'fixed';
clockElement.style.left = '0';
clockElement.style.top = '50%';
clockElement.style.transform = 'translateY(50%)';
clockElement.style.writingMode = 'vertical-rl';
clockElement.style.rotate = '180deg';
clockElement.style.textAlign = 'center';
