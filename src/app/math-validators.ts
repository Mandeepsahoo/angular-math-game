import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourcetwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondNumber = form.value[sourcetwo];
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }
}
