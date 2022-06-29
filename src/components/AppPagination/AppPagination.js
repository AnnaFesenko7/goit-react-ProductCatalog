import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';

const AppPagination = ({ pageCount, activePage, onPageNavigate }) => {
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === pageCount;
  return (
    <Pagination
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!isFirstPage && (
        <Pagination.Prev onClick={() => onPageNavigate(activePage - 2)} />
      )}
      {Array.from({ length: pageCount }).map((_, index) => (
        <Pagination.Item
          key={index}
          active={index === activePage - 1}
          onClick={() => onPageNavigate(index)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      {!isLastPage && (
        <Pagination.Next onClick={() => onPageNavigate(activePage)} />
      )}
    </Pagination>
  );
};
AppPagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onPageNavigate: PropTypes.func.isRequired,
};

export default AppPagination;
