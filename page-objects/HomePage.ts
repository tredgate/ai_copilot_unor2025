import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://example.com");
    return this;
  }

  async goToRegistration() {
    await this.page.click("text=Register");
    return this;
  }

  async goToLogin() {
    await this.page.click("text=Login");
    return this;
  }

  async goToProductDetail(productName: string) {
    await this.page.click(`text=${productName}`);
    return this;
  }
}
