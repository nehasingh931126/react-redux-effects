## start with installing redux tool kit
npm install @reduxjs/toolkit
npm install react-redux: this is required


Remember:
Reducers should be sideEffect free and synchronous

Asynchronous code must not go in the reducers

There are two options to execute the Async code?
Inside the component  (eg useEffect())
Insdie the Action Creators 

Do not try to mutate the object from component of the Reducer Do not


Fat Reducers vs Fat Components vs Fat Actions

Synchornous, side-eefect free code(ie: Data Transformation)
Prefer Reducers try to avoid component and actions

Async code or code with Side Effects


Keep your SideEffect logic in the Component and Data Component logic in the 
