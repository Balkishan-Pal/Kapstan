import axios from "axios";
import { APIEndPoints } from "../../../../../Common/APIEndPoints/APIEndPoints";


export async function fetchEvetHistoryData() {
  try {
    const response = await axios.get(APIEndPoints?.EVENT_HISTORY);
    const values = response.data;
    return values;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

