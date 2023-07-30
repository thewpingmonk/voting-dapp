function ElectionCommision({state , account}) {
  async function startVoting(event)
  {
    event.preventDefault();
    const {contract} = state;
    const start = document.querySelector("#start");
    const end = document.querySelector("#end");
    try{
      await contract.methods.voteTime(start , end).send({
        from: account,
        gas : "1000000",
      })
      alert("Voting Started");
      window.location.reload();

    }
    catch(error){
      alert(error);
    }
  }
  async function Emergency()
  {
    const {contract} = state;
    try{
      await contract.methods.emergency().send({from : account , gas:"1000000"});
      alert("Emergency Declared")
    }
    catch(error)
    {
      alert(error);
    }
  }
  async function Result()
  {
    const {contract} = state;
    try{
      await contract.methods.result().send({from : account , gas:"1000000"});
      alert("Result Declared")
    }
    catch(error){alert(error)};
  }
  return (
    <>
      <div>
        <form className="form" onSubmit = {startVoting}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick = {Emergency}>
          Emergency
        </button>
        <button className="resBtn" onClick = {Result}>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;
