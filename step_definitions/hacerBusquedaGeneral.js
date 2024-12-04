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
  I.click('#busqueda_dropdown > div > div.px-3 > div.d-flex.justify-content-end > button');
});

When('I click on the button "Buscar"', () => {
  I.click('#busqueda_dropdown > div > div.px-3 > div.d-flex.justify-content-end > button');
});

Then('A pop up should appear with the job information for the folioPisa "36016477"', () => {
  I.saveScreenshot('busquedaFolioPisa.png');
});
