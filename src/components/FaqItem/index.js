// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isFaqList: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({isFaqList: !prevState.isFaqList}))
  }

  renderImage = () => {
    const {faqItemDetails} = this.props
    const {answerText} = faqItemDetails
    const {isFaqList} = this.state

    const answerValue = isFaqList ? (
      <div>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </div>
    ) : (
      ' '
    )
    return answerValue
  }

  render() {
    const {isFaqList} = this.state
    const {faqItemDetails} = this.props
    const {questionText} = faqItemDetails

    const plusOrMins = isFaqList
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altValue = isFaqList ? 'minus' : 'plus'

    return (
      <li className="faqItem">
        <div className="button-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            <img src={plusOrMins} alt={altValue} className="plus-image" />
          </button>
        </div>
        {this.renderImage()}
      </li>
    )
  }
}

export default FaqItem
