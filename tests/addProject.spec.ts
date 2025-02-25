import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { DashboardPage } from "../page-objects/DashboardPage";
import { ProjectsPage } from "../page-objects/ProjectsPage";
import { AddProjectModal } from "../page-objects/AddProjectModal";
const projectData: {
  priority: string;
  status: string;
  name: string;
  startDate: string;
  description: string;
}[] = require("../data/pmtool/projectData.json");

test.describe("Data Driven Test - Add Project", () => {
  projectData.forEach((data) => {
    test(`Add project with priority: ${data.priority} and status: ${data.status}`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);
      const projectsPage = new ProjectsPage(page);
      const addProjectModal = new AddProjectModal(page);

      try {
        await loginPage.goto();
        await loginPage.login("ai_jaro2024", "AITredgate24");

        await dashboardPage.clickProjectsMenu();
        await projectsPage.clickAddProjectButton();

        await addProjectModal.fillForm(data);
        await addProjectModal.submitForm();

        // Add assertions to verify the project was added successfully
        await expect(projectsPage.getProject(data.name)).toBeVisible();
      } catch (error) {
        console.error(
          `Error adding project with priority: ${data.priority} and status: ${data.status}`,
          error
        );
        throw error;
      }
    });
  });
});
