import React, { PureComponent } from 'react'

export default class HeaderRow extends PureComponent {
    render() {
        return (
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
            </tr>
        )
    }
}
