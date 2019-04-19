import { combineReducers } from 'redux'; 
 
const songsReducer = () => {
    return [
        {title: 'More than words', duration: '4:20'},
        {title: 'Californication', duration: '3:30'},
        {title: 'In the end', duration: '5:00'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});