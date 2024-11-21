const stationsReducers = {
  filterStationById: (state, action) => {
    const filteredStation = state?.stations?.stations?.find(
      (station) => station.id === action.payload
    );

    state.selectedStation = filteredStation;
  },
};

export default stationsReducers;
