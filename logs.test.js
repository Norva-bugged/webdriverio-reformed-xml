describe('Web Test', () => {
    
    it('makes lots of logs', async () => {

        await browser.url('https://webdriver.io');
        
        for (let i = 0; i < 10000; i++) {
            let title = await browser.getTitle();
            let url = await browser.getUrl();
            
            console.log(`Test ${i}: Page title is ${title}`);
            console.log(`Test ${i}: Current time is ${new Date().toISOString()}`);
        }
        
        let pageTitle = await browser.getTitle();
        expect(pageTitle).not.toBe('');
    
    });
    
    for (let i = 0; i < 3; i++) {
        
        it(`extra test ${i + 1}`, async () => {

            await browser.url('https://webdriver.io');
           
            for (let j = 0; j < 10; j++) {
                console.log(`Extra test ${i + 1} - Log ${j + 1}`);
            }

            expect(true).toBe(true);
        
        });
    }
});