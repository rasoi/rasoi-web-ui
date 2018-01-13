"use strict"
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions'
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap'

import CuisineType from './cuisineType';
import RecipeForm from './recipeForm';
import Cart from './cart';

 class BooksList extends React.Component{
   componentDidMount(){
     // Dispatch an action
     this.props.getBooks();
   }
   render(){
     const booksList = this.props.books.map(function(booksArr){
       return(
         <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <CuisineType className='cuisineWell'
            _id={booksArr._id}
            title={booksArr.title}
            description={booksArr.description}
            image={booksArr.image}
            price={booksArr.price}
          />
        </Col>
       )
     })
     return(
       <Grid>
         <Row>
           <Carousel>
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="/images/carousel/chinese-kitchen.jpg" />
               <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="/images/carousel/kadahi.jpg" />
               <Carousel.Caption>
                 <h3>Third slide label</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img width={900} height={500} alt="900x500" src="/images/carousel/traditional_indian_kitchen_by_the_neolith.jpg" />
               <Carousel.Caption>
                 <h3>Second slide label</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
        </Row>
        <Row style={{marginTop:'15px'}}>
          <Cart />
        </Row>
        <Row>
          {booksList}
        </Row>
       </Grid>
     )
   }
 }

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks:getBooks}, dispatch)
}

 export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
