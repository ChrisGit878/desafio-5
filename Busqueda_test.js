Feature('Busqueda');

Scenario('make the general search tab appear',  ({ I }) => {
    I.loginInLocal();
    I.click('#busqueda_general_button');
    I.see("Folio PISA de la tarea");
    I.saveScreenshot('abrirBusquedaGeneral.png');
});

Scenario('make a search by folioPisa',  ({ I }) => {
    I.loginInLocal();
    I.click('#busqueda_general_button');
    I.fillField('#folio_pisa', '36016477');
    I.click('#busqueda_dropdown > div > div.px-3 > div.d-flex.justify-content-end > button');
    I.saveScreenshot('busquedaFolioPisa.png');
});