import { test } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";
import { RegistrationPage } from "../page-objects/RegistrationPage";
import { LoginPage } from "../page-objects/LoginPage";
import { ProductDetailPage } from "../page-objects/ProductDetailPage";
import { CartPage } from "../page-objects/CartPage";
import { CheckoutPage } from "../page-objects/CheckoutPage";

test.skip("register, login, add product to cart, and checkout", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const registrationPage = new RegistrationPage(page);
  const loginPage = new LoginPage(page);
  const productDetailPage = new ProductDetailPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await (await homePage.navigate()).goToRegistration();
  await registrationPage.register("testuser", "password123");
  await await homePage.goToLogin();
  await loginPage.login("testuser", "password123");
  await await homePage.goToProductDetail("Sample Product");
  await productDetailPage.addToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.completeCheckout();
});
