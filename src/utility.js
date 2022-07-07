export const secondsToString = (seconds) =>
{
    if (isNaN(seconds)) {
        return 0 + "h " + 0 + "m ";
    } else {
        seconds=Math.max(seconds,0)
        var numdays = Math.floor(seconds / 86400);
    
        var numhours = Math.floor((seconds % 86400) / 3600);
    
        var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    
        var numseconds = ((seconds % 86400) % 3600) % 60;
        var endstr=""
    }

    return numhours + "h " + numminutes + "m "//+numseconds+"s";
}

export const parseIntDecimal = (int, num) => {
    return parseFloat(parseFloat(int).toFixed(num));
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const translateQuantityBusd = (quantity, precision) => {
    quantity = Number(quantity)
    let finalquantity = quantity
    let modifier=''

    if (quantity < 1e6) {
      return numberWithCommas((quantity).toFixed(2));
    }

    //console.log('??quantity ',typeof quantity)
    if(quantity>1000000){
        modifier=' Million'
        finalquantity=quantity/1000000
    }
    if(quantity>1000000000){
        modifier=' Billion'
        finalquantity=quantity/1000000000
    }
    if(quantity>1000000000000){
        modifier=' Trillion'
        finalquantity=quantity/1000000000000
    }
    if(quantity>1000000000000000){
        modifier=' Quadrillion'
        finalquantity=quantity/1000000000000000
    }
    if(quantity>1000000000000000000){
        modifier=' Quintillion'
        finalquantity=quantity/1000000000000000000
    }
    if(quantity>1000000000000000000000){
        modifier=' Sextillion'
        finalquantity=quantity/1000000000000000000000
    }
    if(quantity>1000000000000000000000000){
        modifier=' Septillion'
        finalquantity=quantity/1000000000000000000000000
    }
    if(quantity>1000000000000000000000000000){
        modifier=' Octillion'
        finalquantity=quantity/1000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000){
        modifier=' Nonillion'
        finalquantity=quantity/1000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000){
        modifier=' Decillion'
        finalquantity=quantity/1000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000){
        modifier = ' Undecillion'
        finalquantity=quantity/1000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000){
        modifier = ' Duodecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000){
        modifier = ' Tredecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000){
        modifier = ' Quattuordecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000){
        modifier = ' Quindecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000){
        modifier = ' Sexdecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000){
        modifier = ' Septendecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000){
        modifier = ' Octodecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Novemdecillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Vigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Unvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Duovigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Trevigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Quattuorvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Quinvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Sexvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Septenvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Octovigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if(quantity>1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        modifier = ' Novemvigintillion'
        finalquantity=quantity/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    }
    if (precision == undefined) {
        precision=0
        if(finalquantity<10000){
            precision=1
        }
        if(finalquantity<1000){
            precision=2
        }
        if(finalquantity<100){
            precision=3
        }
        if(finalquantity<10){
            precision=4
        }
    }
    if(precision==0) {
        finalquantity = Math.floor(finalquantity)
    }
    return finalquantity.toFixed(precision)+modifier;
}

export const formatTrxValue = (trxstr) => {
    return parseFloat(parseFloat(trxstr).toFixed(4));
}

export const setStringDateFormat = str => {
    let pad = "00"
    let ans = pad.substring(0, pad.length - str.length) + str
    return ans;
}