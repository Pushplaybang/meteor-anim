/* eslint-disable */
Package.describe({
  name: 'pushplaybang:anim',
  version: '0.0.1',
  summary: 'Tiny animation utility to use with _uihooks',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('velocityjs:velocityjs');
  api.addFiles('anim.js', 'client');
  api.export('Anim', 'client');
});
