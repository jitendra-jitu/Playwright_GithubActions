import { Page } from '@playwright/test';

export class Modal {
  constructor(private page: Page) {}

  async closeIfOpen() {
    const closeBtn = this.page.locator('.modal-body .close-modal');
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
    }
  }
}
