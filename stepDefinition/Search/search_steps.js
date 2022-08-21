const {I, searchPage} = inject ();

Given('that I am in the Google homepage', () => {
 searchPage.seeGoogleHomepage()
});

When('I digit Tesssst in the search bar', () => {
 searchPage.insertText()
});

When('click the Search Google button', () => {
 searchPage.clickSearchButton()
});

Then('I see the Did you mean corrector suggestion', () => {
 searchPage.searchResults()
});

When('I click the Im Lucky button', () => {
 searchPage.clickImLuckyButton()
});

Then('I see the Doodles page', () => {
 searchPage.doodlesPage()
});