import axios from 'axios';
import { BookCardData, GoogleBooksApiResponse } from '@/common/types/books';
import { GOOGLE_API_URL } from '@/api/config';
import { transformGoogleBook } from '@/api/transformations';

interface ParamsProps {
    query: string | null;
    startIndex: number;
}

export const fetchBookData = async ({query, startIndex}: ParamsProps): Promise<BookCardData[]> => {
    console.log("Запрос");
    try {
        const response = await axios.get<GoogleBooksApiResponse>(GOOGLE_API_URL, {
            params: {
                q: query ? query : "a",
                maxResults: 20,
                startIndex,
                fields: 'items(id,volumeInfo(title,authors,description,averageRating,ratingsCount,imageLinks/thumbnail))',
            },
        });

        return response.data.items.map(transformGoogleBook);
    } catch (error) {
        throw new Error('Ошибка при загрузке данных о книгах');
    }
};