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
    I.usePlaywrightTo('handle new window', async ({ browserContext, page }) => {
        page.on('popup', async (newPage) => {
            const content = await newPage.textContent('body > div:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
            console.log(content);
            expect(content).to.include('36016477', 'La información de la ventana emergente no corresponde al folioPisa buscado');
        });
      });
    I.saveScreenshot('busquedaFolioPisa.png');
});