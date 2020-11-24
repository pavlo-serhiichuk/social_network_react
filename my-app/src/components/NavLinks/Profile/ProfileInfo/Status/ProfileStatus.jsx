import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    onActivate() {
        this.setState({ //  accинхронная операция
            editMode: true
        })
    }

    onDeactivate() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span onClick={this.onActivate.bind(this)}>My current status</span>
            </div>}
            {this.state.editMode && <div>
                <input autoFocus={true} onBlur={this.onDeactivate.bind(this)} value={this.props.status}/>
            </div>}
        </div>
    }
}

export default ProfileStatus