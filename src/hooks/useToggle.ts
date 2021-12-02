import { useCallback, useState } from 'react';

/**
 * This hook takes a parameter with boolean value and toggles that value to opposite.
 * It's useful when we want to take some action into its opposite action.
 * For example: show and hide modal, show more/show less text, open/close side menu.
 * @param state default to false
 * @param toggle the toggler function
 * @return [state, toggle]
 */

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

// https://usehooks.com/useToggle/
