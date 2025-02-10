export interface LiquidityData {
  id: string;
  amount: number;
  timestamp: string;
  user: string;
}

export interface CoverDetails {
  id: string;
  premium: number;
  coverage: number;
  timestamp: string;
}

export interface TVLData {
  value: number;
  timestamp: string;
}

export interface PlatformVolume {
  value: number;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}