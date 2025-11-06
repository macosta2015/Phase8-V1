const puppeteer = require('puppeteer');

//Please type the name of the file you want to edit here:
const OnShapefileName = 'Extrude8 - Copy';

// const OnShapefileName = 'Extrude10 - Copy';
console.log('Typed name: ' + OnShapefileName)
console.log('You can chose tha name that you want, you know what to do!')
console.log('Discipline moves mountains, it is almost 1am and working')
console.log('LIFE IS GOOD WITH DISCIPLINE')
console.log('You are only limited by your brain, believes')
console.log('You only have one life')
console.log('Blitzscaling')
console.log('Research the AI agents tools')
console.log('Keep working hard')
console.log('Travel, do sports')
console.log('We Rock')
console.log('Champions life')
console.log('You will be bath at the beginning, you will improve if you are disciplined')
console.log('Paso a paso, VamosConTodo')
console.log('Gracias a Dios, amén')
console.log('Tengo muy buenas relaciones')
console.log('LIFE IS WHAT YOU DO, NOT WHAT YOU SAY YOU WILL DO')
console.log('sorround yourself with other entreprenerus')



async function launchBrowserAndNavigateToDocument() {
    console.log('//LAUNCHING BROWSER');
    const browser = await puppeteer.launch({
        defaultViewport: { width: 800, height: 800 },
        headless: false,
        userDataDir: '/Users/marioacosta/Library/Application Support/Google/Chrome/Profile 1'
    });
    console.log('Browser launched successfully.');

    const newPage = await browser.newPage();
    console.log('New page opened successfully.');

    await newPage.goto('https://cad.onshape.com/documents?resourceType=resourcecompanyowner&nodeId=65efc5e06e5bec02f57742fe', { waitUntil: 'networkidle0', timeout: 0 });
    console.log('Page loaded successfully.');

    await newPage.type('input[name="email"].form-control', process.env.EMAIL);
    console.log('Typed email successfully.');

    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    await newPage.type('input[name="password"].form-control', process.env.PASSWORD);
    console.log('Password:', process.env.EMAIL);

    console.log('Password:', process.env.PASSWORD);
    console.log('Password Typed: ',)
    // await newPage.type('input[name="password"].form-control', 'ElonMusk2050#');
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    console.log('Typed password successfully.');

    await newPage.click('button.btn.btn-primary.os-signin-button');

    console.log(await newPage.$eval('button.btn.btn-primary.os-signin-button', button => button.getBoundingClientRect()));

    await newPage.evaluate(() => {
        const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
        if (thirdButton) {
            thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            console.log(thirdButton.getBoundingClientRect());
        } else {
            console.error('Third button not found.');
        }
    });


    await newPage.evaluate(() => {
        const thirdButton = document.querySelectorAll('.documents-filter-icon')[2];
        if (thirdButton) {
            thirdButton.click();
        } else {
            console.error('Third button not found.');
        }
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Clicked on the third button.');

    console.log('//LAUNCHING FILE NAME', OnShapefileName);
    await newPage.evaluate((fileName) => {
        const documentNameElement = document.querySelector(`span[aria-label="Document name: ${fileName}"][ng-bind-html="document.resultHighlight"]`);

        if (documentNameElement) {
            documentNameElement.click();
        } else {
            console.error('Element with text "OnShapefileName" not found.');
        }
    }, OnShapefileName); // Pass OnShapefileName as an argument

    /////If the code breaks, please extend the timer
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Waited for 5 seconds.');

    return newPage; // Return the new page for further operations if needed
}

module.exports = {
    launchBrowserAndNavigateToDocument
};

