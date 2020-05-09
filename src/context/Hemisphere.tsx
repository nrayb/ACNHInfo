// This is a pattern highlighted by Kent C. Dodds
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// I'm pretty much just copying the pattern he highlighted to learn more about contexts

import React, { createContext, useReducer } from 'react';

type Action = {type: 'toggle'};
type State = "North" | "South";
type Dispatch = (action: Action) => void;
type HemisphereProviderProps = {children: React.ReactNode};

const HemisphereStateContext = createContext<State | undefined>(undefined);
const HemisphereDispatchContext = createContext<Dispatch | undefined>(undefined);

function hemisphereReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle': {
      return state === "North" ? "South" : "North";
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const HemisphereProvider = ({ children }: HemisphereProviderProps) => {
  const [state, dispatch] = useReducer(hemisphereReducer, "North");
  return (
    <HemisphereStateContext.Provider value={state}>
      <HemisphereDispatchContext.Provider value={dispatch}>
        {children}
      </HemisphereDispatchContext.Provider>
    </HemisphereStateContext.Provider>
  );
};

export const useHemisphereState = () => {
  const hemisphere = React.useContext(HemisphereStateContext)
  if (hemisphere === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return hemisphere
};

export const useHemisphereDispatch = () => {
  const hemisphereDispatch = React.useContext(HemisphereDispatchContext)
  if (hemisphereDispatch === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return hemisphereDispatch
};
