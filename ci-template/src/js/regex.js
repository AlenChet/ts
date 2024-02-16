export default class Validator {
    validateUsername(username) {
        const regex = /^(?![\d_-]{4,})(?!.*[\d_-]$)(?![\d])[a-zA-Z\d_-]*[a-zA-Z][a-zA-Z\d_-]*$/;
        return regex.test(username) && !/\d{4}/.test(username) && !/^[_-]|[_-]$/.test(username);
    }
}
