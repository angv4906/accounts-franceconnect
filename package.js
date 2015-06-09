Package.describe({
  summary: "Login service for France Connect accounts",
  version: "0.1.0",
  name: "gvisca75:accounts-franceconnect",
  git:"https://github.com/gvisca/accounts-franceconnect.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('gvisca75:franceconnect@0.1.0', ['client', 'server']);

  api.addFiles('franceconnect_login_button.css', 'client');

  api.addFiles("franceconnect.js");
});