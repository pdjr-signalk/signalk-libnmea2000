"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nmea2000 = void 0;
class Nmea2000 {
    static makeMessagePGN127502(instance, channel, state) {
        var now = (new Date()).toISOString();
        return (now + ",6,127502,0,255,8," + Nmea2000.makeSwitchbankMessageComponent(instance, channel, state));
    }
    static makeSwitchbankMessageComponent(instance, channel, state = 0) {
        var channels = (new Array(28)).fill(undefined);
        channels[channel] = state;
        var retval = ("0" + Number(instance).toString(16)).slice(-2);
        for (var g = 0; g < 7; g++) {
            var v = 0;
            for (var o = 3; o >= 0; o--)
                v = ((v << 2) + ((channels[(g * 4) + o] === undefined) ? 3 : channels[(g * 4) + o]));
            retval += "," + ("0" + Number(v).toString(16)).slice(-2);
        }
        return (retval);
    }
}
exports.Nmea2000 = Nmea2000;
