function calculateTaxes(income) {
    // if(!Number.isInfinte(income)) {
    //     throw new error('BAD INCOME');
    // }
    if(income > 30000) {
        return income * 0.25;
    }
    else {
        return income * 0.15;
    }
}