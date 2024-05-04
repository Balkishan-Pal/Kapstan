import axios from "axios";
import { APIEndPoints } from "../../../../../../Common/APIEndPoints/APIEndPoints";


export async function fetchCPUMetricsData() {
  try {
    const response = await axios.get(APIEndPoints?.CPU_UTILIZATION);
    const values = response.data;
    return values;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
