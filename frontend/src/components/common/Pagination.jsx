import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Pagination.module.css';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  paginationRange = [],
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pageBtn}
        aria-label="Previous Page"
      >
        <FaChevronLeft />
      </button>

      {paginationRange.map((page, idx) => {
        if (page === '...') {
          return (
            <span key={`dots-${idx}`} className={styles.dots}>
              &#8230;
            </span>
          );
        }

        return (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page)}
            className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pageBtn}
        aria-label="Next Page"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
