export interface Book {
    id: string;
    title: string;
    author: string;
    coverImage: string;
    description: string;
    price: number;
    rating: number;
};


export interface GoogleBooksApiResponse {
    items: GoogleBookItem[];
}

export interface GoogleBookItem {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        ratingsCount?: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        };
    };
}

export interface BookCardData {
    id: string;
    title: string;
    authors: string[];
    description?: string;
    ratingCount?: string;
    thumbnail?: string;
}

