import { Selector, ClientFunction } from "testcafe";
import {
  login,
  mainPage,
  treatmentTab,
  basicForm,
  beNotified,
  confirmationPage
} from "./locators";
import { ro, userData } from "./consts";
import { scrollTo } from "./common_actions";

fixture`RO smoke tests`.beforeEach(async t => {
  await t
    .expect(Selector(".form").visible)
    .ok()
    .typeText(login.email, userData.email)
    .typeText(login.firstName, userData.firstName)
    .typeText(login.lastName, userData.lastName)
    .typeText(login.password, userData.password)
    .click(login.checkbox)
    .click(login.submit);
})
  .page`https://start.ro.co/roman/ed/?s=ed-onb-titrate&utm_expid=.O9vTFADVROq81tYvJb_UdQ.1&utm_referrer=`;

test("Check user name after register", async t => {
  await t
    .expect(mainPage.welcome.exists)
    .ok()
    .expect(mainPage.welcome.textContent)
    .contains(userData.firstName);
});

test("Be notified, unknown zip code", async t => {
  const userEmail: string = userData.email;
  await t
    .expect(mainPage.continueVisit.exists)
    .ok()
    .click(mainPage.continueVisit)
    .expect(basicForm.title.exists)
    .ok()
    .click(basicForm.sex.withText("Male"))
    .typeText(basicForm.birthDate, userData.birthDate)
    .typeText(basicForm.zipCode, userData.zipCode)
    .click(basicForm.nextButton);
  const title = beNotified.title.withText(
    "Be notified when we’re in your area!"
  );
  await t.expect(title.exists).ok();
  const formEmail = beNotified.email.value;
  await t
    .expect(formEmail)
    .eql(userEmail)
    .typeText(beNotified.comment, userData.comment)
    .click(beNotified.submit);
  const confirmationTitle = confirmationPage.title.withText("Thank you!");
  await t.expect(confirmationTitle.exists).ok();
});

test("Treatment plan", async t => {
  const drugName: string = "Sildenafil";
  await t.expect(mainPage.tabs.exists).ok();
  const treatmentPlans = mainPage.tabs.withText("Our treatment plans");
  await t
    .click(treatmentPlans)
    .expect(treatmentTab.plans.exists)
    .ok()
    .expect(treatmentTab.plans.count)
    .eql(3);
  await scrollTo(500);
  const learnMoreButton = treatmentTab.plansMainInfo.child("button");
  await t
    .click(learnMoreButton)
    .expect(treatmentTab.sideBarContent.exists)
    .ok()
    .expect(treatmentTab.sideBarTitle.innerText)
    .contains(drugName);
});
