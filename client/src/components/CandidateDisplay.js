import { useEffect, useState } from "react";

function CandidateDisplay({state}) {
  let [candidates , setCandidate] = useState([]);
  useEffect(()=>{
    const {contract} = state;
    async function display(){
      const cand = await contract.methods.candidateList().call();
      //console.log(cand);
      setCandidate(cand);
    }
    contract && display();

  } , [state])
  return <>
    <table>
      <tbody>
        {candidates.map((candidate)=>{
          return (
          <tr>
            <td> {candidate.name}</td>
            <td> {candidate.age}</td>
            <td> {candidate.gender}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  </>;
}
export default CandidateDisplay;
