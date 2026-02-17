import { Page } from '@playwright/test';

export class FurniturePage {
  constructor(private page: Page) {}

  // async gotoSetteesAndBenches() {
  //   await this.page.locator('a[href$="/category/settees-and-benches.html"]').click();
  // }


  // change to accept href suffix from tests
  async gotoSetteesAndBenches(hrefEndsWith: string) {
    await this.page.locator(`a[href$="${hrefEndsWith}"]`).click();
  }
}
