import { Page } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}

  async clickProjectsMenu() {
    await this.page.click('a[href*="module=items/items&path=21"]');
  }
}
