const { I, utils } = inject();

module.exports = {

  buttons: {
    searchGoogle: {xpath: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'},
    imLucky: {xpath: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[2]'},
  },

  texts: {
    toSearch: 'Tesssst',
    didYouMean: {xpath: '/html/body/div[7]/div/div[10]/div/div[1]/div[2]/p/span'},
    doodles: {xpath: '//*[@id="archive-link-link"]'},
    google: 'https://google.com'
  },

  fields: {
  searchBar: {name: 'q'},
  },

seeGoogleHomepage(){
I.amOnPage(this.texts.google);
I.waitForElement(this.fields.searchBar)
I.seeElement(this.fields.searchBar)
},

insertText(){
I.waitForElement(this.fields.searchBar)
I.fillField(this.fields.searchBar, this.texts.toSearch)
},

clickSearchButton(){
I.waitForElement(this.buttons.searchGoogle)
I.click(this.buttons.searchGoogle)
},

searchResults(){
I.seeElement(this.texts.didYouMean)
},

clickImLuckyButton(){
I.waitForElement(this.buttons.imLucky)
I.click(this.buttons.imLucky)
},

doodlesPage(){
I.seeElement(this.texts.doodles)
}

}