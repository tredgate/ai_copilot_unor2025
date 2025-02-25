import { Page } from "@playwright/test";

export class ProjectsPage {
  constructor(private page: Page) {}

  async clickAddProjectButton() {
    await this.page.click('button[data-testid="add-project-button"]');
  }

  getProject(name: string) {
    return this.page.locator(`text=${name}`);
  }
}
