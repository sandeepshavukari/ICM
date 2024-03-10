import { Component } from "react";
import "./ExploringStyles.css";
import { Link } from "react-router-dom";

class ExploringData extends Component{
render() {
return(
    <div className={this.props.className}>
        <div className="des-text">
          <Link to={this.props.link} className="des">{this.props.heading}</Link>
          <p>
            {this.props.text}
          </p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2}/>
        </div>
    </div>
);

}
}
export default ExploringData;