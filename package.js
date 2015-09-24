Package.describe({
  name: 'alanning:twilio',
  version: '2.4.0',
  summary: 'Twilio npm wrapper for Meteor',
  git: 'https://github.com/alanning/meteor-twilio.git',
  documentation: 'README.md'
});

Npm.depends({
  "twilio": "2.4.0"
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.export('Twilio', 'server');
  api.addFiles('twilio.js', 'server');
});
