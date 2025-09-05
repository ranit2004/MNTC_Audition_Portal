import { fromZodError } from "zod-validation-error";

export default function ZErrorMessage(error: any) {
  const zError = fromZodError(error);
  const errorMessage = zError ? zError.details[0].message : error.message;

  return errorMessage;
}
