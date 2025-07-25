import { BookCardData, GoogleBookItem } from "@/common/types/books";

export const transformGoogleBook = (book: GoogleBookItem): BookCardData => {
    return (
        {
            id: book.id,
            title: book.volumeInfo.title || "Без названия",
            authors: book.volumeInfo.authors || ['Автор неизвестен'],
            description: book.volumeInfo.description || 'Описание отсутствует',
            ratingCount: book.volumeInfo.ratingsCount || "Нет рейтинга",
            thumbnail: book.volumeInfo.imageLinks?.thumbnail?.replace('http://', 'https://'),
        }
    )
}