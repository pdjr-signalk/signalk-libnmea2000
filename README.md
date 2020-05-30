# signalk-libnmea2000
NMEA 2000 support library for Signal K node plugins.

```
const Nmea2000 = require('./signalk-libnmea2000/Notification.js');

var instance = 10;
var channels = Array(26).fill(0);

var message = Nmea2000.makeMessagePGN127502(instance, channels);
console.log(message);
```

__static makeMessagePGN127502(int *instance*, int[] *channels*)__

Returns a PGN127502 (Binay Switch Control) string suitable for transmission
via an ActiSense NMEA bus interface.

*module* is the target switchbank instance number.
*channels* is an integer array representing the state of each of the switchbank channels (0 = off, 1 = on).
