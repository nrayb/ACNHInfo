import React, {
  createContext,
  ReactChild,
  useContext,
  useReducer,
} from 'react';

type Action = { type: "set" | "clear", payload?: State };
type State = ReactChild | undefined;
type Dispatch = (action: Action) => void;
type Props = { children: React.ReactNode };

const RightHeaderAreaContext = createContext<State | undefined>(undefined);
const RightHeaderAreaDispatchContext = createContext<Dispatch | undefined>(undefined);

function rightHeaderButtonReducer(_state: State, action: Action) {
  switch (action.type) {
    case 'set': {
      return action.payload;
    }
    case "clear": {
      return undefined;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const RightHeaderAreaProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(rightHeaderButtonReducer, undefined);
  return (
    <RightHeaderAreaContext.Provider value={state}>
      <RightHeaderAreaDispatchContext.Provider value={dispatch}>
        {children}
      </RightHeaderAreaDispatchContext.Provider>
    </RightHeaderAreaContext.Provider>
  );
};


export const useRightHeaderAreaState = () => {
  return useContext(RightHeaderAreaContext)
};

export const useRightHeaderAreaDispatch = () => {
  const hemisphereDispatch = useContext(RightHeaderAreaDispatchContext)
  if (hemisphereDispatch === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return hemisphereDispatch
};
