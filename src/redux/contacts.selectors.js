import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.contactStore;

export const selectContacts = createSelector(
  selectPhonebook,
  contactStore => contactStore.contacts
);
export const selectContactsIsLoading = createSelector(
  selectPhonebook,
  contactStore => contactStore.isLoading
);
export const selectContactsError = createSelector(
  selectPhonebook,
  contactStore => contactStore.error
);
export const selectContactsFilterTerm = createSelector(
  selectPhonebook,
  contactStore => contactStore.filterTerm
);