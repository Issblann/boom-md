import { thunks } from './thunks';

const extraReducers = (builder) => {
  builder
    .addCase(thunks.getInformationCity.fulfilled, (state, action) => {
      state.loading = false;
      state.stations = action.payload;
    })
    .addCase(thunks.getInformationCity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(thunks.getPricingPlans.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.plansData = action.payload;
    })
    .addCase(thunks.getPricingPlans.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
    .addCase(thunks.getVehiclesTypes.fulfilled, (state, action) => {
      console.log('action.payload', action.payload);
      state.status = 'succeeded';
      state.vehiclesTypesData = action.payload;
    })
    .addCase(thunks.getVehiclesTypes.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
};

export default extraReducers;
