import { Page } from "@playwright/test";

export class AddProjectModal {
  constructor(private page: Page) {}

  async fillForm(data: {
    priority: string;
    status: string;
    name: string;
    startDate: string;
    description: string;
  }) {
    await this.page.selectOption('select[data-testid="Priority"]', {
      label: data.priority,
    });
    await this.page.selectOption('select[data-testid="Status"]', {
      label: data.status,
    });
    await this.page.fill('input[data-testid="Name"]', data.name);
    await this.page.fill('input[data-testid="Start Date"]', data.startDate);
    await this.page.fill(
      'textarea[data-testid="Description"]',
      data.description
    );
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }
}
