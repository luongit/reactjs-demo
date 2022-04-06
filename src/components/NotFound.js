import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className='page'
                style={{
                    backgroundColor: '#ffcccc',
                    padding: '40px'
                }}>

                <h1
                    style={{
                        color: '#333', fontSize: '36px'
                    }}>404 NotFound</h1>
                <p>Trang web không tìm thấy, vui lòng thử lại sau</p>
            </div>
        );
    }
}

export default NotFound;