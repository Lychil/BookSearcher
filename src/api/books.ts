import axios from 'axios';
import { BookCardData, GoogleBooksApiResponse } from '@/common/types/books';
import { GOOGLE_API_URL } from '@/api/config';
import { transformGoogleBook } from '@/api/transformations';

export const fetchBookData = async (query: string): Promise<BookCardData[]> => {
    try {
        const response = await axios.get<GoogleBooksApiResponse>(GOOGLE_API_URL, {
            params: {
                q: query,
                maxResults: 20,
                fields: 'items(id,volumeInfo(title,authors,description,averageRating,ratingsCount,imageLinks/thumbnail))',
            },
        });

        return response.data.items.map(transformGoogleBook);
    } catch (error) {
        throw new Error('Ошибка при загрузке данных о книгах');
    }
};