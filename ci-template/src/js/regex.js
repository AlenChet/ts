export default class Validator {
    validateUsername(username) {
        const regex = /^(?!.*(\d){4})(?!^\d)[a-zA-Z\d]+(?:[-_]?[a-zA-Z\d]+)*$/;
        return regex.test(username);
    }
}
