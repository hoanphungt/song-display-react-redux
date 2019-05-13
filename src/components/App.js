import React from 'react';
// import { selectSong } from '../actions' //curly braces for named export
import SongList from './SongList';
import SongDetails from './SongDetails';
import Test from './Test';

export default class App extends React.Component {
    render() {
        return (
            <div className='ui container grid'>
                <div className='ui row'>
                    <div className='ui column eight wide'>
                        <SongList />
                    </div>
                    <div className='ui column four wide'>
                        <SongDetails />
                    </div>
                    <div className='ui column four wide'>
                        <Test />
                    </div>
                </div>
            </div>
        )
    }
}