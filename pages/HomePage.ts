import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  // async goto() {
  //   await this.page.goto('https://www.pepperfry.com/');
  // }

  // async assertTitle() {
  //   const expected =
  //     'Buy Furniture & Home Decor Online – Up to 70% Off at Best Prices in India | Pepperfry';
  //   const title = await this.page.title();
  //   expect(title).toBe(expected);
  //   console.log('Title:', title);
  // }


  // change to accept values from tests
  async goto(url: string) { await this.page.goto(url); }

  async assertTitle(expected: string) {
    const title = await this.page.title();
    expect(title).toBe(expected);
  }




  // async closeSignupModalIfVisible() {
  //   const modalClose = this.page.locator('.modal-body .close-modal');
  //   if (await modalClose.isVisible().catch(() => false)) {
  //     await modalClose.click({ trial: false });
  //   }
  // }

  async closeSignupModalIfVisible() {
    const modal = this.page.locator('.authenticate-modal-container');
    const closeBtn = modal.locator('.modal-body .close-modal');

    try {
      await modal.waitFor({ state: 'visible', timeout: 10_000 });
    } catch {
      return;
    }

    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
  }

  async clickFurnitureMenu() {
    await this.page.locator('#Furniture a').click();
  }

  async clickCategoryListBottom() {
    await this.page.locator('.category-list-bottom-text').click();
  }
}