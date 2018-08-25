/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", ()=>{
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it("All Feeds Variables Are Defined",()=>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("The allFeeds Object Has 'url' Defined & Is Not Empty",()=>{
            const checkUrl = allFeeds.map(key => !key.url ? false : true);
            expect(checkUrl).toBeDefined();
            expect((checkUrl).every(key=>key)).toBe(true);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("The allFeeds Object Has 'name' Defined & Is Not Empty",()=> {
            const checkUrl = allFeeds.map(key => !key.name ? false : true);
            expect((checkUrl).every(key=>key)).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    describe("The menu",()=>{
        beforeEach(()=>{
            $menuIcon = $('.menu-icon-link');
            $body = $('body');
        });
        it("Menu Element Is Hidden By Default",()=>{
            expect($('body')).toHaveClass('menu-hidden');
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it("Menu Visibility Is Toggled On Click",()=>{
            $menuIcon.click();
            //does the menu display when clicked
            expect($('body')).toHaveClass('');

            $menuIcon.click();
            //does it hide when clicked again
            expect($('body')).toHaveClass('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries",()=>{
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) => {
            loadFeed(0, ()=> {
                done();
            });
        });

        it("News feed Has At Least A Single Entry",()=>{
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
        /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe("New Feed Selection", () => {
        let feed1, feed2;
        // Ensures that the new feed is loaded 
        beforeEach((done)=> {
            loadFeed(1, ()=>{
                console.log("feed1 load complete!");
                feed1 = $('.feed').html();

                loadFeed(2, ()=> {
                console.log("feed2 load complete!");
                done();
                });
            });
        });

        afterEach(()=> {
            loadFeed(0);
        });
        // Check if two entries are not equal
        it("checks If The Loaded Feeds Are Different",()=>{
            feed2 = $('.feed').html();
            expect(feed1).not.toEqual(feed2);
        });
    });
}());
