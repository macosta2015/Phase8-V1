const puppeteer = require('puppeteer');

async function extensionleftANDrightAssembly(page, selector) {
    console.log("extensionleftANDrightAssembly");

    try {
        console.log("Waiting for the tab list item with the specific selector...");
        // Wait for the selector with the provided selector
        await page.waitForSelector(selector, { timeout: 15000 });

        console.log("Trying to select the tab list item...");
        const tabListItem = await page.$(selector);

        if (tabListItem) {
            console.log('Tab list item selected successfully!');

            // Extract the text content from the span with class 'os-tab-name'
            const tabText = await page.evaluate(el => {
                const tabNameElement = el.querySelector('.os-tab-name');
                return tabNameElement ? tabNameElement.textContent.trim() : null;
            }, tabListItem);

            if (tabText) {
                console.log('Tab text content:', tabText);
            } else {
                console.log('Tab text content not found or is empty.');
            }

            // Click on the tab list item to interact with it
            await tabListItem.click();
            console.log('Tab item clicked successfully!');
        } else {
            console.log('Tab list item not found.');
        }
    } catch (error) {
        console.error("An error occurred while trying to interact with the tab list item:", error);
    }
}

module.exports = extensionleftANDrightAssembly;
