import React, { Component } from "react";

class ThirdItem extends Component{
    constructor(props){
        super(props);
        this.state={
            imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/mountains-mug-gray-1_800x.jpg?v=1562029858"
        }
    }
    handleMouseOver = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/mountains-mug-gray-2_800x.jpg?v=1562029858"
        });
      };
      handleMouseOut = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/mountains-mug-gray-1_800x.jpg?v=1562029858"
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
              Mountains Mug <span className="subtitle">(Gray)</span>
              </div>
              <div>
                <span className="old-price">$24.00</span>{" "}
                <span className="new-price">$16.80</span>
              </div>
            </div>
        )
    }
}

export default  ThirdItem;