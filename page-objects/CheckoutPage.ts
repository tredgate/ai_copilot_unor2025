import { Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.click("text=Complete Purchase");
    return this;
  }
}
