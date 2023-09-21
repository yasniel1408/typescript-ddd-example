import { ValidateProductNameError } from "../errors/ValidateProductNameError";

export class CategoryValueObject {
  constructor(public name: string, public description: string) {
    if (name.length < 3) {
      throw new ValidateProductNameError();
    }
  }
}
