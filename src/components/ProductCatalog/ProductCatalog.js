import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Alert } from 'react-bootstrap';
import AppPagination from 'components/AppPagination/AppPagination';
import {
  GalleryList,
  Card,
  Thumb,
  Title,
  Description,
  Image,
} from './ProductCatalog.styled';
import { getLimitProducts } from '../../services/productCatalog-api';

const LIMIT = 9;

export default class ProductCatalog extends Component {
  state = {
    products: [],
    isLoading: false,
    error: false,
    pageCount: 0,
    activePage: 1,
  };

  static propTypes = {
    limit: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchProducts();
  }

  async fetchProducts(skip = 0) {
    const { limit } = this.props;
    this.setState({
      isLoading: false,
    });
    try {
      const data = await getLimitProducts(limit, skip);
      this.setState({
        products: data.products,
        isLoading: false,
        pageCount: Math.ceil(data.total / limit),
      });
    } catch (e) {
      this.setState({ error: e, isLoading: false });
    }
  }

  onPageNavigate = index => {
    console.log(index);

    this.setState({
      activePage: index + 1,
      isLoading: true,
    });

    this.fetchProducts(index * LIMIT);
  };

  render() {
    const { products, isLoading, error, pageCount, activePage } = this.state;

    if (isLoading) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      );
    }
    if (error) {
      return (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Alert variant="danger">Oop! Something went wrong!</Alert>
        </div>
      );
    }
    return (
      <>
        <GalleryList>
          {products.map(({ thumbnail, title, description, id }) => (
            <Card key={id}>
              <Image src={thumbnail} height="200" />
              <Thumb>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Thumb>
            </Card>
          ))}
        </GalleryList>
        <AppPagination
          pageCount={pageCount}
          activePage={activePage}
          onPageNavigate={this.onPageNavigate}
        />
      </>
    );
  }
}
