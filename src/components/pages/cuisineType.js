import React from 'react';
import {Row, Col, Well, Image, Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addToCart, updateCart} from '../../actions/cartActions'

class CuisineType extends React.Component{
  handleCart(){
      const book = [...this.props.cart, {
        _id:this.props._id,
        title:this.props.title,
        description:this.props.description,
        image: this.props.image,
        price:this.props.price,
        quantity: 1
      }]
      // check if the book is already in the cartArr
      if(this.props.cart.length > 0){
        let _id = this.props._id;
        let cartIndex = this.props.cart.findIndex(function(cart){
          return cart._id === _id;
        })
        if (cartIndex == -1){
          this.props.addToCart(book);

        }
        else{
          //Update the quantity
          this.props.updateCart(_id, 1, this.props.cart)

        }

      }
      else {
          this.props.addToCart(book);
      }
  }

  constructor(){
    super();
    this.state = {
      isClicked:false
    };
  }

  onReadMore(){
    this.setState({isClicked:true})
  }

  render(){
    return(
      <Well color='grey'>
        <Row>
          <Col xs={12} sm={4}>
            <Image className='cuisineWell' src={this.props.image} />
          </Col>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <p>
              {(this.props.description.length > 50 && this.state.isClicked === false)
                ? (this.props.description.substring(0,50)):
                (this.props.description) }
              <button className='link' onClick={this.onReadMore.bind(this)}>
                {(this.state.isClicked === false && this.props.description !== null && this.props.description.length > 50) ? ('....read more') : ('')}
              </button>
            </p>
            <h6>usd. {this.props.price}</h6>
            <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Explore</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state){
  return {
    cart:state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart:addToCart,
    updateCart: updateCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CuisineType);
