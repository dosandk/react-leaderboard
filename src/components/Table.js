import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {

    constructor(){
        super();
        this.state ={
            contacts: usersJSON
        };
    }
//////

    sortByAge=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.contacts.sort((a,b)=>{
           return parseInt(a.age)  - parseInt(b.age);
        })

        this.setState({
            contacts:sortedProductsAsc
        })
    }
    sortByRank=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.contacts.sort((a,b)=>{
           return parseInt(a.rank)  - parseInt(b.rank);
        })

        this.setState({
            contacts:sortedProductsAsc
        })
    }
    sortByPoints=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.contacts.sort((a,b)=>{
           return parseInt(a.points)  - parseInt(b.points);
        })

        this.setState({
            contacts:sortedProductsAsc
        })
    }
    sortByName=()=>{

        let sortedProductsAsc;
        sortedProductsAsc= this.state.contacts.sort((a,b)=>{
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        })

        this.setState({
            contacts:sortedProductsAsc
        })
    }
//////

    render() {

        return (<div>
            <table className="table table-striped">
                <thead>
                    <tr key="head">
                        <th onClick={this.sortByAge}>Age</th>
                        <th onClick={this.sortByName}>Name</th>
                        <th onClick ={this.sortByPoints}>Points</th>
                        <th onClick={this.sortByRank}>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contact) => (
                        <tr >
                            <td>{contact.age}</td>
                            <td>{contact.name}</td>
                            <td>{contact.points}</td>
                            <td>{contact.rank}</td>
                        </tr>
                    ))}
           

                </tbody>
                <tbody></tbody>
            </table>
        </div>)
    }
}
