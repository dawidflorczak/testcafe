import { Selector } from "testcafe";

export const login = {
  form: Selector("#form"),
  firstName: Selector("#firstName"),
  lastName: Selector("#lastName"),
  email: Selector("#temporaryEmail"),
  password: Selector("#password"),
  checkbox: Selector("label.checkbox-label"),
  submit: Selector("button.button--block.button--primary")
};

export const mainPage = {
  welcome: Selector("h2.heading.start-heading"),
  tabs: Selector("button.tabs-button"),
  continueVisit: Selector("button.button.start-button.button--primary")
};

export const treatmentTab = {
  plans: Selector("li.product.product-has__thumb"),
  plansMainInfo: Selector(".product-main"),
  sideBarTitle: Selector("h2.product-modal-name.heading"),
  sideBarContent: Selector(".product-modal-inner")
};

export const basicForm = {
  title: Selector("div.flow-question-header-title"),
  sex: Selector(".choice-item"),
  birthDate: Selector("#dateOfBirth"),
  zipCode: Selector("#zipcode"),
  nextButton: Selector(".form-item").nth(3),
  zipCodeError: Selector(".form_field-error")
};

export const beNotified = {
  title: Selector(".flow-question-header-title"),
  email: Selector("#comment-email"),
  comment: Selector("#comment-extras"),
  submit: Selector(
    "button.button.flow-help-button.button--block.button--primary.button--big"
  )
};

export const confirmationPage = {
  title: Selector(".flow-question-header-title")
};
