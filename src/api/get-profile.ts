import { api } from "@/lib/axios";

interface GetProfileResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "manager" | "customer";
  created_at: Date | null;
  updated_at: Date | null;
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>("/me");

  return response.data;
}
