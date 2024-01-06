import { PrivateFieldContext } from "vee-validate";

export type ValidationStateType<TValue = unknown> = {
  errors: string[];
  handleChange: PrivateFieldContext<TValue>["handleChange"];
}
