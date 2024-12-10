const { I } = inject();
// Add in your custom step files

Given('I opened the general search tab', () => {
  I.amOnPage('/portalIntegral/index');
  I.see('PlexLocal');
  I.click('#busqueda_general_button');
  I.see("Folio PISA de la tarea");
});

When('I enter the folio "36016477"', () => {
  I.fillField('#folio_pisa', '36016477');
});

When('I click on the button "Buscar"', () => {
  I.click('#busqueda_dropdown > div > div.px-3 > div.d-flex.justify-content-end > button');
});

Then('A pop up should appear with the job information for the folioPisa "36016477"', () => {
  I.usePlaywrightTo('handle new window', async ({ browserContext, page }) => {
    page.on('popup', async (newPage) => {
      const content = await newPage.textContent('body > div:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
      console.log(content);
      expect(content).to.include('36016477', 'La información de la ventana emergente no corresponde al folioPisa buscado');
    });
  });
  I.saveScreenshot('busquedaFolioPisa.png');
});
