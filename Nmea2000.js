"use strict;"

module.exports = class Nmea2000 {

    static makeMessagePGN127502(instance, channels) {
        retval = "";
        now = (new Date()).toISOString();
        return(now + ",6,127502,0,255,8," + Nmea2000.makeSwitchbankMessageComponent(instance, channels));
    }

    static makeSwitchbankMessageComponent(instance, channels) {
        var retval = ("0" + Number(instance).toString(16)).slice(-2);
        for (var g = 0; g < 7; g++) {
            var v = 0;
            for (var o = 3; o >= 0; o--) v = ((v << 2) + ((channels[(g * 4) + o] === undefined)?0:channels[(g * 4) + o]));
            retval += "," + ("0" + Number(v).toString(16)).slice(-2);
        }
        return(retval);
    }

}
