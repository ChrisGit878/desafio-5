const { I } = inject();
// Add in your custom step files

Given('I am in the main page', () => {
  I.amOnPage('/portalIntegral/index');
  I.see('PlexLocal');
});

When('I click on the button with id "busqueda_general_button"', () => {
  I.waitForElement('#version', 10);
  I.click('#busqueda_general_button');
});

Then('I should see the input "Folio PISA de la tarea"', () => {
  I.see("Folio PISA de la tarea");
  I.saveScreenshot('abrirBusquedaGeneral-2.png');
});
