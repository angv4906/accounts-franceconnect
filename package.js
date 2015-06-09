Package.describe({
  summary: "Login service for France Connect accounts",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('franceconnect', ['client', 'server']);

  api.addFiles('franceconnect_login_button.css', 'client');

  api.addFiles("franceconnect.js");
});