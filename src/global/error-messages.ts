import * as _ from "lodash";

const isNotEmptyErrorMessage = (fieldName: string): string =>
  `${_.capitalize(fieldName)} must not be empty`;

const isStringErrorMessage = (fieldName: string): string =>
  `${_.capitalize(fieldName)} must be a string`;

const isInvalidErrorMessage = (fieldName: string): string =>
  `${_.capitalize(fieldName)} is invalid`;

const minLengthErrorMessage = (fieldName: string, maxLength: number): string =>
  `The minimum length of the ${_.lowerCase(fieldName)} is ${maxLength} characters.`;

const maxLengthErrorMessage = (fieldName: string, maxLength: number): string =>
  `The maximum length of the ${_.lowerCase(fieldName)} is ${maxLength} characters.`;

const matchErrorMessage = (
  fieldName: string,
  comparedFieldName: string,
): string =>
  `${_.capitalize(fieldName)} must match ${_.lowerCase(comparedFieldName)}`;

export {
  isStringErrorMessage,
  isNotEmptyErrorMessage,
  isInvalidErrorMessage,
  minLengthErrorMessage,
  maxLengthErrorMessage,
  matchErrorMessage,
};
