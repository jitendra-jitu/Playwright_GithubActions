import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { FurniturePage } from '../pages/FurniturePage.ts';
import { SetteesBenchesPage } from '../pages/SetteesBenchesPage.ts';
import { ListingPage } from '../pages/ListingPage.ts';
import { Filters } from '../components/Filters.ts';
import { Modal } from '../components/Modal';

type Fixtures = {
  homePage: HomePage;
  furniturePage: FurniturePage;
  setteesBenchesPage: SetteesBenchesPage;
  listingPage: ListingPage;
  filters: Filters;
  modal: Modal;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  furniturePage: async ({ page }, use) => {
    await use(new FurniturePage(page));
  },
  setteesBenchesPage: async ({ page }, use) => {
    await use(new SetteesBenchesPage(page));
  },
  listingPage: async ({ page }, use) => {
    await use(new ListingPage(page));
  },
  filters: async ({ page }, use) => {
    await use(new Filters(page));
  },
  modal: async ({ page }, use) => {
    await use(new Modal(page));
  }
});

export { expect } from '@playwright/test';