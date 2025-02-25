import { Page } from "@playwright/test";

export class ProductDetailPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click("text=Add to Cart");
    return this;
  }
}
