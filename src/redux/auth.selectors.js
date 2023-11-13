import { createSelector } from "@reduxjs/toolkit";

const authSelectors = state => state.authReduser;

export const selectAuthIsLoading = createSelector(
    authSelectors,
    authReduser => authReduser.isLoading
  );
  export const selectAuthError = createSelector(
    authSelectors,
    authReduser => authReduser.error);

  export const selectAuthToken = createSelector(
    authSelectors,
    authReduser => authReduser.token);

  export const selectAuthUserData = createSelector(
    authSelectors,
    authReduser => authReduser.user);

  export const selectAuthAuthenticated = createSelector(
    authSelectors,
    authReduser => authReduser.authenticated
  );