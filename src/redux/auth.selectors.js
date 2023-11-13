import { createSelector } from "@reduxjs/toolkit";

const authSelectors = state => state.authReduser;

export const selectAuthIsLoading = createSelector(
    selectAuth,
    auth => auth.isLoading
  );
  export const selectAuthError = createSelector(authSelectors,
     auth => auth.error);

  export const selectAuthToken = createSelector(authSelectors,
     auth => auth.token);

  export const selectAuthUserData = createSelector(authSelectors,
     auth => auth.user);

  export const selectAuthAuthenticated = createSelector(
    selectAuth,
    auth => auth.authenticated
  );