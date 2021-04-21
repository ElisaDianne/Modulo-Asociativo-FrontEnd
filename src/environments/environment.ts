// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  credential_app: "da7effe6-aca4-4de1-9d9b-84e3d1773a73", 
  api: "http://10.10.1.121:8080/servicio_seguridad-0.0.1/api/oauth/token", 
  version_date: +new Date("19/04/2021"), 
  version: "V1.1",
  production: true
  
  //production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
