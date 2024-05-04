import axios from "axios";
import { APIEndPoints } from "../../Common/APIEndPoints/APIEndPoints";


export async function fetchApplicationData() {
  try {
    const response = await axios.get(APIEndPoints?.APPLICATIONS);
    const values = response.data;
    return values;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}