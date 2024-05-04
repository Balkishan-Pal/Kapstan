

import axios from "axios";
import { APIEndPoints } from "../../../../../../Common/APIEndPoints/APIEndPoints";


export async function fetchMemoryMetricsData() {
  try {
    const response = await axios.get(APIEndPoints?.MEMORY_UTILIZATION);
    const values = response.data;
    return values;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
