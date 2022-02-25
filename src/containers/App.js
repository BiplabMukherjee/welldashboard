import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import MapLayer from '../components/MapLayer';
import Datatypes from '../components/DataTypes';
import './App.css'

var inputData = require('../OSDU_37_wells.json');


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            location :[],
            searchfield : '',
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response=> response.json() )
        // .then(users=> {
        //     this.setState({robots:users});
        //     //console.log(users)
        // })
        
        // var data1 = Object.entries(data)[0][1][0];
        // var data2 = Object.entries(data1)[0][1];
        // var data3 = Object.entries(data2);
        var data1  = inputData.results.map((item)=>item.data.WellName)
        var data2  = inputData.results.map((item)=>{
            return item.data["x-geojson"].geometries[0].coordinates
        })
        this.setState({robots:data1})
        this.setState({location:data2})
    }

    onSearchChange=(event)=>{ 
        this.setState({searchfield : event.target.value});   
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            //return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            return robot.toLowerCase().includes(this.state.searchfield.toLowerCase())
            console.log(robot);
        })
        const filteredLoc = this.state.robots.filter(robot =>{
            //return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            return robot.toLowerCase().includes(this.state.searchfield.toLowerCase())
            console.log(robot);
        })
        if(this.state.robots.length ===0){
            return <h1>Loading</h1>
        }else {
            return(
                <div className='wrapper'>
                    <div className='container1'>
                        <div className='box1'>
                            <h1>Well Search</h1>
                        </div>
                        <div className='box2'>
                            <SearchBox searchChange={this.onSearchChange}/> 
                        </div> 
                    </div>                    
                    <div className='container2'>
                        <div className='box5'>
                            <Datatypes/>
                        </div>
                        <div className='box3'>                            
                            <CardList robots = {filteredRobots}/>                              
                        </div>
                        <div className='box4'>                            
                            <MapLayer props = {this.state.location} wellname = {this.state.robots}/>                            
                        </div>                    
                    </div>                                        
                </div>
            )
        }
        
    }
}


export default App;