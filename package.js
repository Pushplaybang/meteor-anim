/* eslint-disable */
Package.describe({
  name: 'pushplaybang:anim',
  version: '0.0.2',
  summary: 'Tiny animation utility for blaze _uihooks using velocityJS',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('velocityjs:velocityjs@1.2.1');
  api.addFiles('anim.js', 'client');
  api.export('Anim', 'client');
});
