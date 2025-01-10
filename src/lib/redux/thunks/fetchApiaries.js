export const fetchApiaries = createAsyncThunk(
  "apiaries/fetchApiaries",
  async () => {
    try {
      const response = await request({
        route: "apiaries",
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
