import { useEffect, useState } from "react";

function Vote({state , account}) {
  let [status , setStatus] = useState("Not started");
  const {contract} = state;
  const _voterId = document.querySelector("#VoterId");
  const _candidateId = document.querySelector("#CandidateId");
  async function vote(event){
    event.preventDefault();
    try{
      await contract.methods.vote(_voterId , _candidateId).send({
        from : account,
        gas : "1000000",
      })

    }
    catch(error){
      console.log(error);
    }
    alert("Voted Successfully")
    window.location.reload();

  }
  useEffect(()=>{
    const {contract} = state;
    async function voteStatus(){
      await contract.methods.votingStatus().call();
      setStatus(status);
    }
    contract && voteStatus();
    
  } , [state])
  return (
    <div>
      <form className="form" onSubmit = {vote}>
        <p className="status">Voting Status:{status}</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;
