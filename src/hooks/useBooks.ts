import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBookData } from "@/api/books";

interface UseBooksProps {
    query: string | null;
}

export const useBooks = ({ query }: UseBooksProps) => {
    return useInfiniteQuery({
        queryKey: ['books', query],
        queryFn: ({ pageParam = 0 }) => fetchBookData({
            query,
            startIndex: pageParam
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length * 20 : undefined;
        },
        initialPageParam: 0,
    });
};