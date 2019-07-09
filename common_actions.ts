import { ClientFunction } from "testcafe";

export const scrollTo = ClientFunction(function(num: number) {
  window.scrollTo(0, num);
});
