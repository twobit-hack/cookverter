  /*
    This program converts different units of measurement used in baking
    I plan to incorporate this program into an HTML form

    startAmount must be a number
    startUnit and endUnit must be 'tsp', 'tbsp', 'cups', 'pints', 'quarts', 'gallons', 'fl oz', or 'mL'

    */
const bakingConverter = (startAmount, startUnit, endUnit) => { 
    //Cups has the most forks in measurement, so I'm using it as the central unit
    //Section: cupsTo
    const cupsToTsp = (cups) => {return cups * 48}
    const cupsToTbsp = (cups) => {return cups * 16}
    const cupsToPints = (cups) => {return cups / 2}
    const cupsToQuarts = (cups) => {return cups / 4}
    const cupsToGallons = (cups) => {return cups / 16}
    const cupsToOunce = (cups) => {return cups * 8}
    const cupsToMl = (cups) => {return cups * 236.592}

    //Section: toCups
    const tspToCups = (tsp) => {return tsp / 48}
    const tbspToCups = (tbsp) => {return tbsp / 16}
    const pintsToCups = (pints) => {return pints * 2}
    const quartsToCups = (quarts) => {return quarts * 4}
    const gallonsToCups = (gallons) => {return gallons * 16}
    const ounceToCups = (flOz) => {return flOz / 8}
    const mlToCups = (mL) => {return mL / 236.592}

    //Section: Conversion Calculator
    let amount = 0

    switch (startUnit) {
        case 'tsp':
            if (endUnit === 'tsp') {return startAmount}
            amount = tspToCups(startAmount);
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'tbsp':
            if (endUnit === 'tbsp') {return startAmount}
            amount = tbspToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'cups':
            if (endUnit === 'cups') {return startAmount}
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'pints':
            if (endUnit === 'pints') {return startAmount}
            amount = pintsToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'quarts':
            if (endUnit === 'quarts') { return startAmount}
            amount = quartsToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'gallons':
            if (endUnit === 'gallons') {return startAmount}
            amount = gallonsToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'fl oz':
            if (endUnit === 'fl oz') {return startAmount}
            amount = ounceToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'mL') {amount = cupsToMl(amount)}
        case 'mL':
            if (endUnit === 'mL') {return startAmount}
            amount = mlToCups(startAmount);
            if (endUnit === 'tsp') {amount = cupsToTsp(amount)}
            if (endUnit === 'tbsp') {amount = cupsToTbsp(amount)}
            if (endUnit === 'cups') {return amount}
            if (endUnit === 'pints') {amount = cupsToPints(amount)}
            if (endUnit === 'quarts') {amount = cupsToQuarts(amount)}
            if (endUnit === 'gallons') {amount = cupsToGallons(amount)}
            if (endUnit === 'fl oz') {amount = cupsToOunce(amount)}        
    }

}
