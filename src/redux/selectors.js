import { createSelector } from '@reduxjs/toolkit';

export const getAllTrucks = state => state.trucks.allItems;
export const getTrucks = state => state.trucks;
export const getTruckDetails = (id, state) => {
  const trucks = state.trucks;
  const truckDetails = trucks.items.find(item => item.id === id);
  return truckDetails;
};

export const getStatusFilter = state => state.filters.status;
export const selectorGetLocation = state => state.filters.status.location;
export const selectAllCities = createSelector([getAllTrucks], allTrucks => {
  const locationList = allTrucks
    .map(item => {
      const [country, city] = item.location.split(', ');
      return { value: `${city}, ${country}`, label: `${city}, ${country}` };
    })
    .filter(
      (location, index, self) =>
        index === self.findIndex(l => l.value === location.value)
    );
  return locationList;
});
export const selectorGetFormFilter = state => state.filters.status.form;
