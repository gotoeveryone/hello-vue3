import { configure, defineRule, Form, Field } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import ja from "@vee-validate/i18n/dist/locale/ja.json"
import * as AllRules from "@vee-validate/rules";

Object.entries(AllRules).forEach(([rule, validator]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  defineRule(rule, validator);
});

configure({
  generateMessage: localize({
    ja: {
      messages: ja.messages,
    }
  }),
  validateOnBlur: true,
});

setLocale('ja');

export { Form as ValidationForm, Field as ValidationField };
