export const getTrucks = state => state.trucks;
export const getTruckDetails = (id, state) => {
  const trucks = state.trucks;
  console.log(trucks);

  const truckDetails = trucks.items.find(item => item.id === id);
  return truckDetails;
};

export const getStatusFilter = state => state.filters.status;
export const selectorGetLocation = state => state.filters.status.location;
export const selectorGetFormFilter = state => state.filters.status.form;
