
$(function () {

    describe("RSS Feeds", ()=>{

        it("All Feeds Variables Are Defined",()=>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("The allFeeds Object Has 'url' Defined & Is Not Empty",()=>{
            const checkUrl = allFeeds.map(key => !key.url ? false : true);
            expect(checkUrl).toBeDefined();
            expect((checkUrl).every(key=>key)).toBe(true);
        });

        it("The allFeeds Object Has 'name' Defined & Is Not Empty",()=> {
            const checkUrl = allFeeds.map(key => !key.name ? false : true);
            expect((checkUrl).every(key=>key)).toBe(true);
        });
    });

    describe("The menu",()=>{
        beforeEach(()=>{
            $menuIcon = $('.menu-icon-link');
            $body = $('body');
        });
        it("Menu Element Is Hidden By Default",()=>{
            expect($('body')).toHaveClass('menu-hidden');
        });

        it("Menu Visibility Is Toggled On Click",()=>{
            $menuIcon.click();
            expect($('body')).toHaveClass('');

            $menuIcon.click();
            expect($('body')).toHaveClass('menu-hidden');
        });
    });
    describe("Initial Entries",()=>{

        beforeEach((done) => {
            loadFeed(0, ()=> {
                done();
            });
        });

        it("News feed Has At Least A Single Entry",()=>{
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", () => {
        let feed1, feed2;
        beforeEach((done)=> {
            loadFeed(1, ()=>{
                feed1 = $('.feed').html();
                loadFeed(2, ()=> done());
            });
        });
        afterEach(()=> loadFeed(0));
        it("checks If The Loaded Feeds Are Different",()=>{
            feed2 = $('.feed').html();
            expect(feed1).not.toEqual(feed2);
        });
    });
}());
