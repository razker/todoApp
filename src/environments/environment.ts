// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBRkiu4scdrUB50LIu-8m65NFTHE65hV30",
    authDomain: "todoapp-d6dbe.firebaseapp.com",
    databaseURL: "https://todoapp-d6dbe.firebaseio.com",
    projectId: "todoapp-d6dbe",
    storageBucket: "todoapp-d6dbe.appspot.com",
    messagingSenderId: "682584491770"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
