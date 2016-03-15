var irc = require("irc");

// Create the configuration
var config = {
    channels: ["#CWI.Network","#PandaCoinPND","#DigitalPandaCoin"],
    server: "irc.freenode.net",
    botName: "cwibot",
    password: ""
};

var recentLotto = {};
var oneHour = 60000 * 60;

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
        channels: config.channels,
                autoConnect: true
});


// Listen for joins
bot.addListener("join", function(channel, who) {
        // Welcome them in!
        bot.say(channel, who + " Welcome");
});

// Add user to recentLotto array, wait one hour, then remove from recentLotto array.
function userLotto(from, channel) {
        if (!recentLotto[channel]) recentLotto[channel] = { names: [] };
        var names = recentLotto[channel].names;
        if (names.indexOf(from) > -1) {
                bot.say(channel, "You must wait one hour after your last lotto to lotto again.");
        } else {
                bot.say(channel, "!tip " + from + " 10");
                names.push(from);
                setTimeout(function() {
                        names.splice(names.indexOf(from), 1);
                }, oneHour);
        }
}
bot.addListener("notice", function (nick, to, text, message) {
    console.log(nick + ": " + text);
});

bot.addListener("message", function(from, channel, text, message) {
    console.log(channel + " - " + from + ": " + text);
        if(from != config.botName || from != "Tip-A-Bean","PandaTip") {
                if(text === "!lotto") {
                        console.log(recentLotto);
                        userLotto(from, channel);
                }

                if(text === "!register") {
                        bot.say("nickserv", "identify cwibot " + config.password);
                }
                if(text === "!nick") {

                }
        }
});

// Say !rain X every hour
setInterval(function() {
    bot.say(config.channels[0], "!rain 1");
    bot.say(config.channels[1,2], "!rain 10");
}, oneHour);
