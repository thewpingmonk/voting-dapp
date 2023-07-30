import { useEffect, useState } from "react";

function VoterList({state}) {
  let [voters , setVoters] = useState([]);
  useEffect(()=>{
    const {contract} = state;
    async function display(){
      const voter = await contract.methods.voterList().call();
      setVoters(voter);
    }
    contract && display();
    
  })
  return <>
    
      <table>
        <tbody>
          {voters.map((voter)=>{
              return (
                <tr>
                  <td>{voter.name}</td>
                  <td>{voter.age}</td>
                  <td>{voter.gender}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    
  </>;
}
export default VoterList;
