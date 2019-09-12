import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
    render() {

        return (<div>
            <table className="table table-striped">
                <thead>
                <tr key="head">
                    <th>Age</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Rank</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>)
    }
}
