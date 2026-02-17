import { Page, expect } from '@playwright/test';
import { ensureDirAndReturnPath } from '../utils/paths.ts';
import { extractLeadingNumber } from '../utils/text';

export class ListingPage {
  constructor(private page: Page) {}

  async waitForDomReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async captureProductContainerScreenshot(filename = 'screenshot.png') {
    const container = this.page.locator('.clip-product-listing-container');
    await container.scrollIntoViewIfNeeded();

    const path = await ensureDirAndReturnPath(`output/screenshots/${filename}`);
    await container.screenshot({ path });
    console.log('Saved screenshot:', path);
  }

  async getListingCount(): Promise<number | null> {
    const text = await this.page.locator('.listing-count span').nth(1).textContent();
    const num = extractLeadingNumber(text);
    console.log('count:', num ?? 'N/A');
    return num;
  }
}
