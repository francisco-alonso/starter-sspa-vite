import { registerApplication, start } from "single-spa";

registerApplication({
  name: "microfrontend1",
  app: () =>
    import(
      /* webpackIgnore: true */
      "http://localhost:3000/src/main.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "microfrontend2",
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       "http://localhost:3001/src/main.ts"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
