import React from "react";


class Share extends React.Component {
  constructor(props) {
    super(props);
    this.showApiResult = this.showApiResult.bind(this);
    this.loader = this.loader.bind(this);

  }

   showApiResult = () => {
       debugger;
       if ( this.props.cardURL ) {
         return (
           <div>
            <p className="share__result">
              <a className="share__result-link" href={this.props.cardURL} target="_blank" >{this.props.cardURL}</a>
               <a href={`https://twitter.com/intent/tweet/?text=generate+with+AWESOME+PROFILE+CARDS&url=${this.props.cardURL}`} class="twitterLink js-twitterLink" target="_blank" ></a>
            </p>
         </div>
         )
       } else {
          return ( 
            <div>
              <p className="share__result"> {this.props.cardError}</p>
            </div>)
        }
    }

    loader(){
      return (
        <div class="share__loader" id="loader-4">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
      #loader-4 span{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: #3498db;
        margin: 35px 5px;
        opacity: 0;
      }
      
      #loader-4 span:nth-child(1){
        animation: opacitychange 1s ease-in-out infinite;
      }
      
      #loader-4 span:nth-child(2){
        animation: opacitychange 1s ease-in-out 0.33s infinite;
      }
      
      #loader-4 span:nth-child(3){
        animation: opacitychange 1s ease-in-out 0.66s infinite;
      }
      
      @keyframes opacitychange{
        0%, 100%{
          opacity: 0;
        }
      
        60%{
          opacity: 1;
        }
      }
      
    }
    
    render(){
    return (
      <div className="folded__form js-form">
        <div className="share__button">
          <button type="submit" className="share__button--orange js-shareBtn" onClick={this.props.getDataFromApi}>
            <i className="far fa-address-card share__button--orange--icon"></i>
            <h2 className="share__button--orange--text">CREAR TARJETA</h2>
          </button>
          {if (props.isCardRendering) ? this.loader : this.showApiResult(this.props)}
        </div>
      </div>
    );
  }
}

export default Share;
