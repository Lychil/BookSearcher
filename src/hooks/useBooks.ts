import { fetchBookData } from "@/api/books";
import { BookCardData } from "@/common/types/books";
import { useQuery } from "@tanstack/react-query";

interface UseBooksProps {
    query: string;
}

export const useBooks = ({query}: UseBooksProps) => {
    return useQuery<BookCardData[]>({
        queryKey: ['books'],
        queryFn: () => fetchBookData(query),
        initialData: []
    });
};