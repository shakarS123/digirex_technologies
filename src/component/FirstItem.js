import React, { Component } from "react";

class FirstItem extends Component{
    constructor(props){
        super(props);
        this.state={
            imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/walnut-2_400x.jpg?v=1573243409"
        }
    }
    handleMouseOver = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/gather-ls-new-2_800x.jpg?v=1573243434"
        });
      };
      handleMouseOut = () => {
        this.setState({
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0167/4484/products/walnut-2_400x.jpg?v=1573243409"
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
                Gather Basic Set <span className="subtitle">(Walnut)</span>
              </div>
              <div>
                <span className="old-price">$149.00</span>{" "}
                <span className="new-price">$105.00</span>
              </div>
            </div>
        )
    }
}

export default  FirstItem;