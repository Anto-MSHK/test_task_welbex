import "i18next";
import "react-i18next";
import ru from "./translations/ru.json";
import en from "./translations/en.json";
import { resources } from "./i18n";

declare module "react-i18next" {
  export interface Resources {
    translation: typeof ru;
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    //  resources: (typeof resources)["en"];
    translation: typeof ru;
    returnNull: false;
    resolveJsonModule: true;
  }
}
