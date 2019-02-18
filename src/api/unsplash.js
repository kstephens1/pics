import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9a234feca88589e8a9257c75a6e0533ad42e4279ebb468f5f5fe5ed02103b44f"
  }
});
