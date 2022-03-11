// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  currentReviewDisplay = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="reviewContainer">
        <img src={imgUrl} alt={username} className="image" />
        <p className="nameHeading">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onclickLeft = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onclickRight = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReview]

    return (
      <div className="bg">
        <h1 className="ReviewsHeading">Reviews</h1>
        <div className="bg2">
          <button
            className="button"
            type="button"
            testid="leftArrow"
            onClick={this.onclickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>
          <div className="reviewContainer">
            {this.currentReviewDisplay(currentReviewDetails)}
          </div>
          <button
            className="button"
            type="button"
            testid="rightArrow"
            onClick={this.onclickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
