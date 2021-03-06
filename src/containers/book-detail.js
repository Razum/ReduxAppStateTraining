/**
 * Created by roman on 17.04.2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        console.log(111, this.props.book);
        if (!this.props.book) {
            return <div>Select a book to get stated.</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}


export default connect(mapStateToProps)(BookDetail);