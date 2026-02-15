import axios from "axios";

export async function getData() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
