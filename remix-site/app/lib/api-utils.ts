import type { PaginationParams, PaginationMetadata, PaginatedResponse } from "~/types/starter";

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 20;
const MAX_PER_PAGE = 100;

export function getPaginationParams(params: PaginationParams): Required<PaginationParams> {
  const page = Math.max(1, Number(params.page) || DEFAULT_PAGE);
  const per_page = Math.min(MAX_PER_PAGE, Math.max(1, Number(params.per_page) || DEFAULT_PER_PAGE));
  return { page, per_page };
}

export function createPaginationMetadata(
  total_items: number,
  { page, per_page }: Required<PaginationParams>
): PaginationMetadata {
  const total_pages = Math.ceil(total_items / per_page);
  return {
    total_items,
    total_pages,
    current_page: page,
    per_page,
    has_next: page < total_pages,
    has_previous: page > 1
  };
}

export function paginateArray<T>(
  items: T[],
  { page, per_page }: Required<PaginationParams>
): PaginatedResponse<T> {
  const start = (page - 1) * per_page;
  const paginatedItems = items.slice(start, start + per_page);
  
  return {
    items: paginatedItems,
    pagination: createPaginationMetadata(items.length, { page, per_page })
  };
}

export function createErrorResponse(status: number, message: string) {
  return {
    error: {
      status,
      message
    }
  };
} 