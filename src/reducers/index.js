import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { id: 1, title: 'baby one more time', duration: '4:05' },
        { id: 2, title: 'show me the meaning', duration: '2:05' },
        { id: 3, title: 'gennie', duration: '3:05' },
        { id: 4, title: 'sync time', duration: '5:05' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED': 
            return action.payload;
        default:
            return selectedSong
    }
}

const counterCount = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            if (state > 0) {
                return state - 1
            } else {
                return state
            }
        default: 
            return state
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    count: counterCount
})