import { Page } from '@playwright/test';
import { extractLeadingNumber } from '../utils/text';

export class SetteesBenchesPage {
  constructor(private page: Page) {}

  private contentAt(index: number) {
    return this.page.locator('.clip-catg-card-wrapper .clip-catg-content').nth(index);
  }

  async getSetteesCount(): Promise<number | null> {
    const text = await this.contentAt(1).textContent();
    return extractLeadingNumber(text);
  }

  async getBenchesCount(): Promise<number | null> {
    const text = await this.contentAt(2).textContent();
    return extractLeadingNumber(text);
  }

  async getRecamiersCount(): Promise<number | null> {
    const text = await this.contentAt(3).textContent();
    return extractLeadingNumber(text);
  }
}















































// npm i -D @playwright/test allure-playwright allure-commandline                                                       
// npx allure-commandline generate ".\allure-results" --clean -o ".\allure-report"                         
// npx allure open ".\allure-report"