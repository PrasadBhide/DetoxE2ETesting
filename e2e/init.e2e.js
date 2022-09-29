describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should have "Step One" section', async () => {
      await expect(element(by.text('Step One'))).toBeVisible();
    });
  
    it('should have "See Your Changes" section in the second slide', async () => {
      await (element(by.id('slides')).swipe('left'));
      await(expect(element(by.text('See Your Changes'))).toBeVisible());
      await(element(by.id('slides')).swipe('right'));
    });

    it('should enable swiping back and forth', async () => {
      await(expect(element(by.text('Step One'))).toBeVisible());
      await(element(by.id('slides')).swipe('left'));
      await(element(by.id('slides')).swipe('right'));
      await(expect(element(by.text('Step One'))).toBeVisible());
    });

    it('should render "Debug" and have a button to click in the third slide', async () => {
      await(element(by.id('slides')).swipe('left'));
      await(element(by.id('slides')).swipe('left'));
      await(expect(element(by.text('Debug'))).toBeVisible());

      await(element(by.text('Click here!')).tap());
      await(expect(element(by.text('Clicked!'))).toBeVisible());
      await(element(by.text("OK")).tap());
    });

    it('should render "Learn More" and change text in the forth slide', async () => {
      await(element(by.id('slides')).swipe('left'));
      await(element(by.id('slides')).swipe('left'));
      await(expect(element(by.text('Learn More'))).toBeVisible());

      const docsInputId = element(by.id('docsInput'));
      const inputText = "Hey there";

      await(expect(docsInputId).toBeVisible());
      await docsInputId.clearText();
      await docsInputId.replaceText(inputText);

      await (expect(docsInputId).toHaveValue(inputText));
    });

  });