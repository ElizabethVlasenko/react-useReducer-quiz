function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      class="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
