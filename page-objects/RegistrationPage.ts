import { Page } from "@playwright/test";

export class RegistrationPage {
  constructor(private page: Page) {}

  async register(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click("text=Register");
    return this;
  }
}
