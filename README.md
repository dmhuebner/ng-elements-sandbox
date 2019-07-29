# NgElementsSandbox

Angular Elements to Web Components - Example Project

---

### Building and Running the Demo:

Build the Web Component (demo/ng-elements-sandbox.js)
```
npm run build-wc
```
Run the Demo page:
```
npm run serve-demo
```

---

### Creating a Web Component with Angular Elements:

**1 - ng add @angular/elements**

**2 - Create a component you would like to render as a Web Component**

**3 - Register the component as an entryComponent in the module**

**4 - Remove the bootstrap property from the module and add an empty ngDoBootstrap() {} function in the Module class which indicates to Angular that this module should be auto-bootstrapped by itself**

**5 - in the Module class where the component is declared add the following:**

  ```
  import { createCustomElement } from @angular/elements
  
  export class WebComponentsModule() {
    constructor(injector: Injector) {
      const el = createCustomElement(ExampleComponent, {injector});
      customElements.define('example-component', el);
    }
    
    ngDoBootstrap
  }
  ```
  
  Note: be sure to import createCustomElement from @angular/elements as well as the Injector from @angular/core.
  To expose a component as an Angular Elements Web Component you call createCustomElement and pass 
  the Component Class and an object with an injector property with a value of the injector you passed into the constructor. 
  The Injector will be used internally to resolve the components dependencies via the dependency injector.
  
  We then use the native customElements DOM API to create a native html Web Component. We do this by calling the customElements.define() method.
  The first argument is the custom tag for the component. The second argument is the Angular Elements custom element object.
  
  Note: If you're just going to use the component as a Web Component, the selector property in the component decorator can be removed.

**6 - We then wrote a shell script (buildWC.sh) to build the project with --prod and then concatenated the separate js files into one ng-elements-sandbox.js file in the demo directory.**

---

### Consuming The Web Component

You can reference the JS file for the Web Component and add it to any project. We added ours to the index.html file in the demo directory.

You can run the demo page that consumes our Web Component by running:
```
npm run serve-demo
```


