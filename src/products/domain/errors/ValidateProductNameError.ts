export class ValidateProductNameError extends Error {
  constructor() {
    super("El nombre de la categoría debe tener al menos 3 caracteres.");
    this.name = "ValidateProductNameError";
  }
}
