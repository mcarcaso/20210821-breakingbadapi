import axios from "axios";
import { useQuery } from "react-query";

export default function useBreakingBadQuery(query) {
  return useQuery(["breakingBadQuery", query], async () => {
    let { data } = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    return data;
  });
}
