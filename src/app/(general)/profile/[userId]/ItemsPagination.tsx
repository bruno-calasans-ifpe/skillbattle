import { useEffect, useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type ItemPaginationProps<Item> = {
  items: Item[];
  itemsPerPage?: number;
  onPageChange: (items: Item[]) => void;
};

export default function ItemsPagination<Item>({
  itemsPerPage = 4,
  items,
  onPageChange,
}: ItemPaginationProps<Item>) {
  const [currentPage, setCurrentPage] = useState(1);

  const calcPreviousIndex = (page: number) => {
    const previousIndex =
      page === 1 ? 0 : Math.min(itemsPerPage * (page - 1), items.length - 1);
    return previousIndex;
  };

  const calcNextIndex = (page: number) => {
    const nextIndex =
      page === 1
        ? itemsPerPage
        : Math.min(calcPreviousIndex(page) + itemsPerPage, items.length);
    return nextIndex;
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const currentItems = items.slice(
      calcPreviousIndex(pageNumber),
      calcNextIndex(pageNumber),
    );
    onPageChange(currentItems);
  };

  const goNextPage = () => {
    const nextPage = Math.max(currentPage - 1, 1);
    setCurrentPage(nextPage);
    const currentItems = items.slice(
      calcPreviousIndex(nextPage),
      calcNextIndex(nextPage),
    );
    onPageChange(currentItems);
  };

  const goBackPage = () => {
    const previousPage = Math.min(currentPage + 1, pagesNumber);
    setCurrentPage(previousPage);
    const currentItems = items.slice(
      calcPreviousIndex(previousPage),
      calcNextIndex(previousPage),
    );
    onPageChange(currentItems);
  };

  const pagesNumber = Math.ceil(items.length / itemsPerPage);
  const canGoBack = currentPage != 1;
  const canGoNext = currentPage < pagesNumber;

  const rendePageButtons = () => {
    const pageButtons: React.ReactNode[] = [];
    for (let index = 1; index <= pagesNumber; index++) {
      pageButtons.push(
        <PaginationItem
          key={index}
          onClick={() => goToPage(index)}
          className='cursor-pointer'
        >
          <PaginationLink isActive={currentPage === index}>
            {index}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return pageButtons;
  };

  useEffect(() => {
    goToPage(1);
  }, []);

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem hidden={!canGoBack}>
          <PaginationPrevious
            className='cursor-pointer'
            onClick={goNextPage}
            content='voltar'
          />
        </PaginationItem>

        {rendePageButtons()}

        {/* Next Button */}
        <PaginationItem hidden={!canGoNext}>
          <PaginationNext
            className='cursor-pointer'
            onClick={goBackPage}
            content='próxima'
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
