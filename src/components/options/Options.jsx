import css from './Options.module.css'

const updateFeedback = feedbackType => {

}

const Options = ({updateFeedback, resetFeedback}) => {
    return (
        <div>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            <button onClick={resetFeedback}>Reset</button>
        </div>
    );
}

export default Options;