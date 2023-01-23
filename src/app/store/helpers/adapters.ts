import { IOnboardingReducerState } from "../modules/onboarding/onboarding.types";

export const getAll = (state: any) => {
  const { entities, ids } = state;
  if (ids && ids.length) {
    return ids.map(id => entities[id]);
  }
  return null;
};
export const getIds = (state: any) => state.ids;
export const getStatus = (state: any) => state.status;
export const getEntity = (state: any) => {
  return state.entity
};
export const getEntities = (state: any) => state.entities;
export const getErrors = (state: any) => {
  if (state.errors) {
    window.scrollTo(0, 0);
  }
  return state.errors;
};

export const getFormData = (state: IOnboardingReducerState) => {
  return state.dataState && state.dataState.formData;
};
export const getActiveId = (state: any) => state.activeId;

/**
 * Get active entity
 *
 * @param state
 */
export const getActive = state => {
  const { entities, activeId } = state;

  return entities[activeId];
};

export const getOneById = (state: any): any => (id: number): any => {
  const { entities } = state;

  return entities[id];
};
