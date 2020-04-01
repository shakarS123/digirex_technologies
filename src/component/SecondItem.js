import React, { Component } from "react";

class SecondItem extends Component{
    constructor(props){
        super(props);
        this.state={
            imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/logo-mp-natural-xl-1_800x.jpg?v=1570567538"
        }
    }
    handleMouseOver = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/logo-mp-natural-xl-2_400x.jpg?v=1570567538"
        });
      };
      handleMouseOut = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/logo-mp-natural-xl-1_800x.jpg?v=1570567538"
        });
      };
    render(){
        return(
            <div className="col-md-3 col-xs-3">
              <div className="item-content">
                <div className="item-bedge">sale</div>
                <img
                  className="item-image"
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                  src={this.state.imageSrc}
                />
              </div>
              <div className="item-title">
              Premium Leather Mousepad XL <span className="subtitle">(Ugmonk Logo - Natural)</span>
              </div>
              <div>
                <span className="old-price">$48.00</span>{" "}
                <span className="new-price">$38.80</span>
              </div>
            </div>
        )
    }
}

export default  SecondItem;