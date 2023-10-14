import React from 'react';
import './journals.css';

const journals = () => {
    return (
        <div className='table'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Response</th>
                </tr>
                <tr>
                    <td>Jamie</td>
                    <td>19</td>
                    <td>I am sad</td>
                </tr>
                <tr>
                    <td>Craig</td>
                    <td>19</td>
                    <td>Draw using leap</td>
                </tr>
                <tr>
                    <td>Bill</td>
                    <td>25</td>
                    <td>Hello world</td>
                </tr>
            </table>
        </div>


    );
}

export default journals;