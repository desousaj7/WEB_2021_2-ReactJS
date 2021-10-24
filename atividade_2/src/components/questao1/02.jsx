import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
    return (
       <div>
           <h2>Oi</h2>
       </div>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})