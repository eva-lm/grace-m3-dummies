import React from "react";

class Share extends React.Component {
  render() {
    return (
      <div class="folded__form js-form">
        <div class="share__button">
          <button type="submit" class="share__button--orange js-shareBtn">
            <i class="far fa-address-card share__button--orange--icon"></i>
            <h2 class="share__button--orange--text">CREAR TARJETA</h2>
          </button>
        </div>
        <partial src="/_share-message.html"></partial>
        <partial src="/_share-error.html"></partial>
      </div>
    );
  }
}
export default Share;
