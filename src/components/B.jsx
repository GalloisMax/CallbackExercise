import React, { Component } from 'react';
import { C } from './C';

export class B extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="comp-b">
                <p>{`I'm the B component ! My title prop is : ${title} `}</p>
                <C title={title} />
            </div>
        );
    }
}

export default B;
