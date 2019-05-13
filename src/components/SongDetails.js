import React from 'react';
import { connect } from 'react-redux';

class SongDetails extends React.Component {
    render() {        
        if (!this.props.song) return <h3>Song Details</h3>

        const { title, duration } = this.props.song

        return (
            <div>
                <h3>Song Details</h3>
                <p>Title: {title}</p>
                <i>Duration: {duration}</i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);