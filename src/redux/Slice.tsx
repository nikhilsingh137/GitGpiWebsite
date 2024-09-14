import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IBrief,
  IData,
  IFeature,
  IHeader,
  IImagebox,
  ILatest,
  IOffer,
  IPower,
  IWalfred,
} from "./Article";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  imageData: Array<IImagebox>;
  walfredData: Array<IWalfred>;
  powerData: Array<IPower>;
  featureData: Array<IFeature>;
  offerData: Array<IOffer>;
  briefData: Array<IBrief>;
  latestData: Array<ILatest>;
  dataData: Array<IData>;
  error: boolean;
}

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/header.json"
  );
  return headerData.json();
});
export const fetchImagebox = createAsyncThunk("fetchImagebox", async () => {
  const imageData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/image.json"
  );
  return imageData.json();
});
export const fetchWalfred = createAsyncThunk("fetchWalfred", async () => {
  const walfredData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/walfred.json"
  );
  return walfredData.json();
});
export const fetchPower = createAsyncThunk("fetchPower", async () => {
  const powerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/power.json"
  );
  return powerData.json();
});
export const fetchFeature = createAsyncThunk("fetchFeature", async () => {
  const featureData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/feature.json"
  );
  return featureData.json();
});

export const fetchOffer = createAsyncThunk("fetchOffer", async () => {
  const offerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/offer.json"
  );
  return offerData.json();
});

export const fetchBrief = createAsyncThunk("fetchBrief", async () => {
  const briefData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/brief.json"
  );
  return briefData.json();
});

export const fetchLatest = createAsyncThunk("fetchLatest", async () => {
  const latestData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/latest.json"
  );
  return latestData.json();
});
export const fetchData = createAsyncThunk("fetchData", async () => {
  const dataData = await fetch(
    "https://nikhilsingh137.github.io/React_data/GpiApi/data.json"
  );
  return dataData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  imageData: [],
  walfredData: [],
  powerData: [],
  featureData: [],
  offerData: [],
  briefData: [],
  latestData: [],
  dataData: [],
  error: false,
};

const Slice = createSlice({
  name: "Api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHeader.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchImagebox.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchWalfred.fulfilled, (state, action) => {
      state.walfredData = action.payload;
    });
    builder.addCase(fetchPower.fulfilled, (state, action) => {
      state.powerData = action.payload;
    });
    builder.addCase(fetchFeature.fulfilled, (state, action) => {
      state.featureData = action.payload;
    });
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerData = action.payload;
    });
    builder.addCase(fetchBrief.fulfilled, (state, action) => {
      state.briefData = action.payload;
    });
    builder.addCase(fetchLatest.fulfilled, (state, action) => {
      state.latestData = action.payload;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.dataData = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default Slice.reducer;
