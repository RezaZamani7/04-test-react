import { Component } from "react";
import Product from "./product";
class Products extends Component {
    state={
        products: [
            {id:1, count:2, productName: "laptop"},
            {id:2, count:1, productName: "phone"},
            {id:3, count:4, productName: "airpod"}
        ]
    }
    render() { 
        return (<>
        {this.state.products.map((p,index) => (
            <Product onDelete={this.handleDelete} key={index} id={p.id} productName={p.productName} count={p.count} />
            ))}
        </>);
    }
    handleDelete=(id)=>{
        const newProducts=this.state.products.filter(p=>p.id!==id);
        this.setState({products: newProducts});
    }
}
 
export default Products;