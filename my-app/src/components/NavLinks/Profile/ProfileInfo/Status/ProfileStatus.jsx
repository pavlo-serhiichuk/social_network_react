import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    onActivate = () => {
        // debugger

        this.setState({ //  accинхронная операция
            editMode: true
        })
    }

    onDeactivate = () => {
        // debugger
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        // debugger
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onClick={this.onActivate}>{this.props.status}</span>
            </div>}
            {this.state.editMode && <div>
                <input onChange={this.onStatusChange}
                       autoFocus={true}
                       onBlur={this.onDeactivate}
                       value={this.state.status}/>
            </div>}
        </div>
    }
}

export default ProfileStatus