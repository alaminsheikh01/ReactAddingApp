import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state ={
            qty: 0
        };
    }

     buy=()=>{
        this.setState({qty: this.state.qty + 1 });
        this.props.handbleTotal(this.props.price);
    }
    show=()=>{
        this.props.handleShow(this.props.name);
    }

    render(props){
        return(
            <>
            <div className="container">

            <div className="card" style={{width:"12rem"}}>
                <div className="card-body">

                       <p>Book name: {this.props.name}</p>

                    <div className="card-text">
                        <p>Price: {this.props.price}</p>
                        <h5>Qty: {this.state.qty} item</h5><br/>
                        <button className="btn btn-primary mr-2" onClick={this.buy}>Buy</button>
                        <button className="btn btn-primary" onClick={this.show}>show</button>
                    </div>
                </div>
          </div>
            <hr/>
            </div>
            </>
        );
    }
}

class Total extends Component{
    render=()=>{
        return(
            <>
            <div className="container">
            <h3>Total Cash: ${this.props.total} </h3>
            </div>
            </>
        )
    }
}

class ProductForm extends Component{
    submit=(e)=>{
        e.preventDefault();
        var product ={
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }

        this.props.handleCreate(product)


        this.refs.name.value ="";
        this.refs.price.value="";
    }
    render=()=>{
        return(
            <>

        <div className="container mt-4">
        <form onSubmit={this.submit}>
                <input type="text" placeholder="Book name.." ref="name"/>
                <input type="text" placeholder="Book price.." ref="price"/>
                <br></br>
                <button className="btn btn-primary btn-sm mb-4 mt-3">Create Product</button>
            </form>
            <hr/>
        </div>

            </>
        )
    }
}

class ProductList extends Component{

    constructor(props){
        super(props);
        this.state = {
            total: 0,
            ProductList: [
                {name:"JavaScript", price:121},
                {name:"Node js", price: 100},
                {name:"Python", price: 65}
            ]
        };
    };
    calculationTotal =(price)=>{
        this.setState({total: this.state.total + price });
        
    }

    createProduct=(product)=>{
        this.setState({
            ProductList: this.state.ProductList.reverse(product).concat(product)
        })
    }


    showProduct=(name)=>{
        alert("You selsected " + name)
    }

    render=()=>{
        var a = this;
        var products = this.state.ProductList.map(function(product){
            return(

                <Product name={product.name} price={product.price} 
                 handleShow={a.showProduct}
                 handbleTotal={a.calculationTotal}/>
            )
        })
        return(
            <>
            <ProductForm handleCreate={this.createProduct}/>
            {products}
            <Total total={this.state.total}/>
            
            </>
        )
    }
}

export default ProductList;
