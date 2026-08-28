
export interface CategoryData {
    nombre: string;
}

export interface Category {
    id: number;
    nombre: string;
    slug: string;
    productos_count: number;
}

export interface CategoryResponse {
    success: boolean;
    message: string;
    data?: {
        categories: Category[];
        pagination: {
            total: number;
            current_page: number;
            per_page: number;
            total_pages: number;
        };
    };
}

export interface CategoryPaginationProps {
    currentPage: number;
    totalPages: number;
    totalCategories: number;
    currentCount: number;
    loading: boolean;
    onPrevious: () => void;
    onNext: () => void;
}
