# ALPHA SOFTWARE, NOT WORKING!

After initializing and updating all git submodules and installing KiwiIRC per [their instructions](https://github.com/prawnsalad/KiwiIRC) do the following:

    $ cd KiwiIRC
    $ cp config.example.js config.js

edit config.js and change:

    conf.servers.push({
        port:   7778,
        address: "0.0.0.0"
    });

To

    conf.servers.push({
        port:   7778,
        address: "0.0.0.0",
        public_http : '../irc/'
    });

Start the KiwiIRC server and enjoy CanJS frontend.