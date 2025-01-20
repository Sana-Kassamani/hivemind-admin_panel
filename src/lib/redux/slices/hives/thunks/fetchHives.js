import { fetchApiaries } from "../../apiaries/thunks/fetchApiaries";

export const fetchHivesCases = (builder) => {
  builder.addCase(fetchApiaries.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(fetchApiaries.fulfilled, (state, action) => {
    action.payload.forEach((apiary) => {
      const { hives, tasks, ...rest } = apiary;
      console.log("Apiary ", apiary._id, " and has hives ", hives);
      state.hives[apiary._id] = hives;
    });
    state.isLoading = false;
  });
  builder.addCase(fetchApiaries.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  });
};
