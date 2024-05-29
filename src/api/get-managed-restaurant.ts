import { api } from "@/lib/axios";

export interface GetManegedRestaurantResponse {
  id: number;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
  manegerId: String | null;
  description: string | null;
}

export async function getManegedRestaurant() {
  const response = await api.get<GetManegedRestaurantResponse>("/managed-restaurant");

  return response.data;
}
