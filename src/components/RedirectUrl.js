import isBot from 'isbot';

const url = "https://www.healthline.com/nutrition/how-to-lose-weight-as-fast-as-possible"
const RedirectUrl = !isBot(navigator.userAgent) ? window.location = url : <p>Hello world!</p>

export default RedirectUrl;