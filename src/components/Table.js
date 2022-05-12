import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {

    constructor()
    {
        super();
        this.state ={
            contacts: usersJSON
        };
    }



    componentDidUpdate(prevProps,prevState) {
       if(this.props.altered !== prevProps.altered) {

        if(this.props.altered == "name") { this.sortByName() }
        if(this.props.altered == "age") { this.sortByAge() }
        if(this.props.altered == "points") { this.sortByPoints() }
        if(this.props.altered == "rank") { this.sortByRank() }
       }


    }
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
        //  {console.log(this.props.altered)}
        return (
            
        <div>
            <table className="table table-striped">
                <thead>
                    <tr key="head">
                        <th>Age</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Rank</th>
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
