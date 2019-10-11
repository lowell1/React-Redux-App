import React from "react";
import {getDog} from "../actions";
import {connect} from "react-redux";

// const FoxList = props => {
//     console.log("foxlist.js: ", props.foxes);
//     props.getFoxes();
//     return (
//         <div className="fox-list">
//             {/* {props.error && <p>{props.error}</p>}
//             {props.isFetching && <p>Loading...</p>} */}
//         </div>
//     )
// }

class DisplayDog extends React.Component {
    constructor(props) {
        super();
        props.getDog();
    }

    render() {
        console.log(this.props.dog, this.props.error);
        return (
            <div className="display-dog">
                <h1>Random dog:</h1>
                {
                    this.props.isFetching && <p>Loading...</p>
                }
                {
                    this.props.error && <p>Error! {this.props.error}</p>
                }
                {
                    !this.props.error && <img src={this.props.dog} alt="random dog"/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dog: state.dog,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    {getDog}
)(DisplayDog);