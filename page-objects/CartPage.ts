import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.click("text=Checkout");
    return this;
  }
}
