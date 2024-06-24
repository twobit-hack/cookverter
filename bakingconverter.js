/*
This program converts different units of measurement used in baking
I plan to incorporate this program into an HTML form
Todo: figure out how to round to two decimals if there are decimals and omit decimals if it's an integer
*/
const bakingConverter = (startAmount, startUnit, endUnit) => {

    //Section: Downward Conversion
    //To start, I'm defining functions for each single-step conversion, largest to smallest
    const gallonsToQuarts = (gallons) => {
        const quarts = gallons * 4;
        return quarts;
    }
    const quartsToPints = (quarts) => {
        const pints = quarts * 2;
        return pints;
    }
    const pintsToCups = (pints) => {
        const cups = pints * 2;
        return cups;
    }
    const cupsToOunce = (cups) => {
        const flOz = cups * 8;
        return flOz;
    }
    const cupsToTbsp = (cups) => {
        const tbsp = cups * 16;
        return tbsp;
    }
    const tbspToTsp = (tbsp) => {
        const tsp = tbsp * 3;
        return tsp;
    }
    //I'm including a milliliter option for funsies
    const ounceToMl = (flOz) => {
        const ml = flOz * 30;
        return ml;
    }

    //Section: Upward Conversion
    //Next, I need to do the same in reverse in case people need to convert upward
    const mlToOunce = (ml) => {
        const flOz = ml / 30;
        return flOz;
    }
    const tspToTbsp = (tsp) => {
        const tbsp = tsp / 3;
        return tbsp;
    }
    const tbspToCups = (tbsp) => {
        const cups = tbsp / 16;
        return cups;
    }
    const ounceToCups = (flOz) => {
        const cups = flOz / 8;
        return cups;
    }
    const cupsToPints = (cups) => {
        const pints = cups / 2;
        return pints;
    }
    const pintsToQuarts = (pints) => {
        const quarts = pints / 2;
        return quarts;
    }
    const quartsToGallons = (quarts) => {
        const gallons = quarts / 4;
        return gallons;
    }


    //All that's left is allowing the program to convert multiple steps at once
    //Defining the single step functions allows me to shorten the switch-cases by calling the functions in-step
    
    
    //Section: Conversion Calculator
    switch (startUnit) {
        case 'tsp':
            switch (endUnit) {
                case 'tbsp':
                    return tspToTbsp(startAmount);
                case 'cups':
                    return tspToTbsp(tbspToCups(startAmount));
                case 'pints':
                    return tspToTbsp(tbspToCups(cupsToPints(startAmount)));
                case 'quarts':
                    return tspToTbsp(tbspToCups(cupsToPints(pintsToQuarts(startAmount))));
                case 'gallons':
                    return tspToTbsp(tbspToCups(cupsToPints(pintsToQuarts(quartsToGallons(startAmount)))));
                case 'fl oz':
                    return tspToTbsp(tbspToCups(cupsToOunce(startAmount)));
                case 'mL':
                    return tspToTbsp(tbspToCups(cupsToOunce(ounceToMl(startAmount))));
                default:
                    return startAmount;
            }
        case 'tbsp':
            switch (endUnit) {
                case 'tsp':
                    return tbspToTsp(startAmount);
                case 'cups':
                    return tbspToCups(startAmount);
                case 'pints':
                    return tbspToCups(cupsToPints(startAmount));
                case 'quarts':
                    return tbspToCups(cupsToPints(pintsToQuarts(startAmount)));
                case 'gallons':
                    return tbspToCups(cupsToPints(pintsToQuarts(quartsToGallons(startAmount))));
                case 'fl oz':
                    return tbspToCups(cupsToOunce(startAmount));
                case 'mL':
                    return tbspToCups(cupsToOunce(ounceToMl(startAmount)));
                default:
                    return startAmount;
            }
        case 'cups':
            switch (endUnit) {
                case 'tsp':
                    return cupsToTbsp(tbspToTsp(startAmount));
                case 'tbsp':
                    return cupsToTbsp(startAmount);
                case 'pints':
                    return cupsToPints(startAmount);
                case 'quarts':
                    return cupsToPints(pintsToQuarts(startAmount));
                case 'gallons':
                    return cupsToPints(pintsToQuarts(quartsToGallons(startAmount)));
                case 'fl oz':
                    return cupsToOunce(startAmount);
                case 'mL':
                    return cupsToOunce(ounceToMl(startAmount));
                default:
                    return startAmount;
            }
        case 'pints':
            switch (endUnit) {
                case 'tsp':
                    return pintsToCups(cupsToTbsp(tbspToTsp(startAmount)));
                case 'tbsp':
                    return pintsToCups(cupsToTbsp(startAmount));
                case 'cups':
                    return pintsToCups(startAmount);
                case 'quarts':
                    return pintsToQuarts(startAmount);
                case 'gallons':
                    return pintsToQuarts(quartsToGallons(startAmount));
                case 'fl oz':
                    return pintsToCups(cupsToOunce(startAmount));
                case 'mL':
                    return pintsToCups(cupsToOunce(ounceToMl(startAmount)));
                default:
                    return startAmount;
            }
        case 'quarts':
            switch (endUnit) {
                case 'tsp':
                    return quartsToPints(pintsToCups(cupsToTbsp(tbspToTsp(startAmount))));
                case 'tbsp':
                    return quartsToPints(pintsToCups(cupsToTbsp(startAmount)));
                case 'cups':
                    return quartsToPints(pintsToCups(startAmount));
                case 'pints':
                    return quartsToPints(startAmount);
                case 'gallons':
                    return quartsToGallons(startAmount);
                case 'fl oz':
                    return quartsToPints(pintsToCups(cupsToOunce(startAmount)));
                case 'mL':
                    return quartsToPints(pintsToCups(cupsToOunce(ounceToMl(startAmount))));
                default:
                    return startAmount;
            }
        case 'gallons':
            switch (endUnit) {
                case 'tsp':
                    return gallonsToQuarts(quartsToPints(pintsToCups(cupsToTbsp(tbspToTsp(startAmount)))));
                case 'tbsp':
                    return gallonsToQuarts(quartsToPints((pintsToCups(cupsToTbsp(startAmount)))));
                case 'cups':
                    return gallonsToQuarts(quartsToPints(pintsToCups(startAmount)));
                case 'pints':
                    return gallonsToQuarts(quartsToPints(startAmount));
                case 'quarts':
                    return gallonsToQuarts(startAmount);
                case 'fl oz':
                    return gallonsToQuarts(quartsToPints(pintsToCups(cupsToOunce(startAmount))));
                case 'mL':
                    return gallonsToQuarts(quartsToPints(pintsToCups(cupsToOunce(ounceToMl(startAmount)))));
                default:
                    return startAmount;
            }
        case 'fl oz':
            switch (endUnit) {
                case 'tsp':
                    return ounceToCups(cupsToTbsp(tbspToTsp(startAmount)));
                case 'tbsp':
                    return ounceToCups(cupsToTbsp(startAmount));
                case 'cups':
                    return ounceToCups(startAmount);
                case 'pints':
                    return ounceToCups(cupsToPints(startAmount));
                case 'quarts':
                    return ounceToCups(cupsToPints(pintsToQuarts(startAmount)));
                case 'gallons':
                    return(ounceToCups(cupsToPints(pintsToQuarts(quartsToGallons(startAmount)))));
                case 'mL':
                    return (ounceToMl(startAmount));
                default:
                    return startAmount;
            }
        case 'mL':
            switch (endUnit) {
                case 'tsp':
                    return mlToOunce(ounceToCups(cupsToTbsp(tbspToTsp(startAmount))));
                case 'tbsp':
                    return mlToOunce(ounceToCups(cupsToTbsp(startAmount)));
                case 'cups':
                    return mlToOunce(ounceToCups(startAmount));
                case 'pints':
                    return mlToOunce(ounceToCups(cupsToPints(startAmount)));
                case 'quarts':
                    return mlToOunce(ounceToCups(cupsToPints([pintsToQuarts(startAmount)])));
                case 'gallons':
                    return mlToOunce(ounceToCups(cupsToPints(pintsToQuarts(quartsToGallons(startAmount)))));
                case 'fl oz':
                    return mlToOunce(startAmount);
                default:
                    return startAmount;
            }
    }
}
