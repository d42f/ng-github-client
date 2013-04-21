'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function () {
    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    describe('list - no token', function () {
        beforeEach(function () {
            browser().navigateTo('#/list');
        });


        it('should render auth when user navigates to /list and app has no token', function () {
            expect(element('[ng-view] h2:first').text()).toMatch(/Repositories/);
        });
    });
});