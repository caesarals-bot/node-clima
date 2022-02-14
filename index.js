const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");






const main = async() => {

    const busquedas = new Busquedas();
    let opt = '';

    do {
        // Imprimir menu
        opt = await inquirerMenu();
        
        
        switch (opt) {
            case 1:
                // Mostrar Mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad( lugar );
                //Buscar los lugares

                // Seleccionar el lugar

                //Clima
                
                //Mostrar Resultados
                console.log('\nInformación del lugar\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );

                console.log('Selecciono la opcion 1');
                break;

            case 2:
                console.log('Selecciono la opcion 2');
                
                break;

           
             
            default:
                break;
        }

        if ( opt !== 0 ) await pausa();

    } while( opt !== 0);   
     // pausa();
    
}


main();