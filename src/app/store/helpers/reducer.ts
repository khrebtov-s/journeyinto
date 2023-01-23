export const updateEntityById = (state: any, id: number, applyChanges: any): any => {
  const entity = state[id];

  if (entity) {
    return {
      ...state,
      [id]: applyChanges({ ...entity })
    };
  }

  return state;
};
