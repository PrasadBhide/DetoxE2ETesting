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
  });