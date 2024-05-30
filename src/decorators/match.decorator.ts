import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { matchErrorMessage } from "src/global/error-messages";
import { CreateUserDto } from "src/modules/user/user.dto";

@ValidatorConstraint({ async: true })
export class MatchContraint implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    const [relatedPropertyName] = validationArguments.constraints;
    const relatedValue = (validationArguments.object as CreateUserDto)[
      relatedPropertyName
    ];
    return value === relatedValue;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    const [relatedPropertyName] = validationArguments.constraints;
    return matchErrorMessage("confirm password", relatedPropertyName);
  }
}

export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: MatchContraint,
    });
  };
}
