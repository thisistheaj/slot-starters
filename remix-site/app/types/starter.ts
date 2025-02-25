export interface StarterMetadata {
  name: string;
  url: string;
}

export interface StarterQuality {
  maintenance?: {
    commitFrequency?: number;
    issueResponseTime?: number;
  };
  documentation?: {
    readmeCompleteness?: number;
    setupInstructions?: number;
    exampleCoverage?: number;
  };
}

export interface Starter {
  metadata: StarterMetadata;
  technologies: string[];
  features?: {
    [category: string]: {
      [feature: string]: boolean;
    };
  };
  quality?: StarterQuality;
}

export interface PaginationParams {
  page?: number;
  per_page?: number;
}

export interface StarterFilters {
  technologies?: string[];
  features?: string[];
  min_quality?: number;
}

export interface PaginationMetadata {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationMetadata;
} 