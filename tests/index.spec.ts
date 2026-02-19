import { test, expect } from '../fixtures/test-fixtures';
import testData from "../data/pepperfry.data.json"

test('@smoke @sanity Mini Project - Pepperfry flow with same locators', async ({
  page,
  homePage,
  furniturePage,
  setteesBenchesPage,
  filters,
  listingPage,
  modal
}) => {

  await homePage.goto(testData.siteUrl);
  await homePage.assertTitle(testData.expectedTitle);

  await homePage.closeSignupModalIfVisible();
  await modal.closeIfOpen();

  await homePage.clickFurnitureMenu();
  await homePage.clickCategoryListBottom();

  await furniturePage.gotoSetteesAndBenches(
    testData.categories.setteesAndBenchesHrefEndsWith
  );

  const setteesCount = await setteesBenchesPage.getSetteesCount();
  const benchesCount = await setteesBenchesPage.getBenchesCount();
  const recamiersCount = await setteesBenchesPage.getRecamiersCount();

  console.log('Settees:', setteesCount);
  console.log('Benches:', benchesCount);
  console.log('Recamiers:', recamiersCount);

  await filters.openMoreFilters();
  await filters.openMaterialSection();
  await filters.selectByLabel(testData.filters.material);
  await filters.apply();

  await listingPage.waitForDomReady();
  await listingPage.captureProductContainerScreenshot(
    testData.screenshots.listingContainer
  );

  const metalCount = await listingPage.getListingCount();
  expect(metalCount).toBeGreaterThan(0);
});



