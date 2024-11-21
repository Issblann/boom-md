import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const thunks = {
  getInformationCity: createAsyncThunk(
    'stations/getInformationCity',
    async (city, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `https://api.citybik.es/v2/networks/${city}`
        );
        return response.data.network;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),

  getPricingPlans: createAsyncThunk(
    'stations/getPricingPlans',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://bogota.publicbikesystem.net/customer/gbfs/v2/en/system_pricing_plans'
        );

        return response.data.data.plans;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),

  getVehiclesTypes: createAsyncThunk(
    'stations/getVehiclesTypes',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://bogota.publicbikesystem.net/customer/gbfs/v2/en/vehicle_types'
        );

        return response.data.data.vehicle_types;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  ),
};
