import { Page, Locator } from '@playwright/test';

export class Filters {
  private moreFilter: Locator;
  constructor(private page: Page) {
    this.moreFilter = page.locator('.more-filter');
  }

  async openMoreFilters() {
    await this.moreFilter.click();
  }

  async openMaterialSection() {
    await this.page.getByRole('heading', { name: ' Material ' }).click();
  }

  async selectByLabel(label: string) {
    await this.page.getByText(label, { exact: true }).click();
  }

  async apply() {
    await this.page.locator("[data-test='clip_filter_apply_button']").click();
  }
}