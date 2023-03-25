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


## Using an Action Creator Thunk
We can put the logic of Side effect in the component and the other way is using Action creators which we will
see now

## What is the Thunk?
A function that delays an action until later
An action creator function that does not return the action itself but another function which eventually returns the actions

Redux create its own Action Creator with the same name as of the Reducer

