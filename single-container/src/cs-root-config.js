import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@cs/single-header",
  app: () => System.import("@cs/single-header"),
  activeWhen: ['/']
});

registerApplication({
  name: "@cs/single-payments",
  app: () => System.import("@cs/single-payments"),
  activeWhen: (location) => location.pathname === '/single-payments',
});


registerApplication({
  name: "@cs/single-statement",
  app: () => System.import("@cs/single-statement"),
  activeWhen: (location) => location.pathname === '/single-statement',
});

registerApplication({
  name: "@cs/single-typescript",
  app: () => System.import("@cs/single-typescript"),
  activeWhen: (location) => location.pathname === '/single-typescript',
});

start({
  urlRerouteOnly: true,
});
