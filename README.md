# signalk-libnmea2000
NMEA 2000 support library for Signal K node plugins.

```
const Nmea2000 = require('./signalk-libnmea2000/Notification.js');

// Get a message string that will set all relays off on switchbank
// 0x0A.

var instance = 0x0A;
var channels = Array(28).fill(0);

var message = Nmea2000.makeMessagePGN127502(instance, channels);
console.log(message);
```

__static makeMessagePGN127502(int *instance*, int[] *channels*)__

Returns an Actisense format PGN127502 (Binary Switch Control) message string
which will set the relay output channels on the switchbank specified by
*instance* to the states specified in the *channels* array.
The returned string is suitable for transmission via an Actisense compatible
NMEA bus interface.

*instance* specifies the target switchbank instance number and must be in the
range 0 through 254.

*channels* specifies the required state of each of the relay channels on the
target switchbank.
The first relay on the target is specified by *channels*[0] and the length of
the array cannot exceed the NMEA limit of 28 channels.
Each array entry must have one of the values 0 (off), 1 (on) or 3 (no change).

__static makeMessagePGN127502ForChannel(int *instance*, int *channel*, int *value*)__

Returns an Actisense format PGN127502 (Binary Switch Control) message string
which will set the state of relay output *channel* on the switchbank *instance*
to *value*.
The returned string is suitable for transmission via an Actisense compatible
NMEA bus interface.

*instance* specifies the target switchbank instance number and must be in the
range 0 through 254.

*channel* specifies the target relay channel and must be in the range 0 through
27.

*value* specifies the required relay state and must be one of 0 (off) or 1 (on).






