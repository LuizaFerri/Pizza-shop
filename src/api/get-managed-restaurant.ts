import { api } from "@/lib/axios";

interface GetManegedRestaurantResponse {
  id: number;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
  manegerId: String | null;
}

export async function getManegedRestaurant() {
  const response = await api.get<GetManegedRestaurantResponse>("/managed-restaurant");

  return response.data;
}
