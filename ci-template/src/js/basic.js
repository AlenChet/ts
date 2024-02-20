export default class ErrorRepository {
  constructor() {
      this.errors = new Map();
  }

  translate(code) {
      const errorDescription = this.errors.get(code);
      return errorDescription ? errorDescription : 'Unknown error';
  }

  addError(code, description) {
      this.errors.set(code, description);
  }

  deleteError(code) {
      this.errors.delete(code);
  }

  clearErrors() {
      this.errors.clear();
  }
}
