import * as _ from "lodash";

const isStringErrorMessage = (fieldName: string): string =>
  `${_.capitalize(fieldName)} should be a string`;

const minLengthErrorMessage = (fieldName: string, maxLength: number): string =>
  `The minimum length of the ${_.lowerCase(fieldName)} is ${maxLength} characters.`;

const matchErrorMessage = (
  fieldName: string,
  comparedFieldName: string,
): string =>
  `${_.capitalize(fieldName)} must match ${_.lowerCase(comparedFieldName)}`;

export { isStringErrorMessage, minLengthErrorMessage, matchErrorMessage };
