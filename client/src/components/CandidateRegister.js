import { useState } from "react";
import CandidateDiplay from "./CandidateDisplay";

function CandidateRegister({state , account}) {
  async function register(event){
    event.preventDefault();
    const {contract} = state;
    const _name = document.querySelector("#name").value;
    const _party = document.querySelector("#party").value;
    const _age = document.querySelector("#age").value;
    const _gender = document.querySelector("#gender").value;
    try{
      await contract.methods.candidateRegister(_name , _party , _age , _gender).send(
        {from : account ,
        gas : "1000000",
      });
      alert("Regitration Successful");
      window.location.reload();

    } catch(error)
    {
      alert(error);
    }
    //console.log(_name , _party , _age , _gender);
    

  }
  return (
    <div>
      <form className="form" onSubmit = {register}>
        <label className="label1" htmlFor="name">
          Name:
        </label>
        <input className="innerBoxCand" type="text" id="name"></input>

        <label className="label1" htmlFor="party">
          Party:
        </label>
        <input className="innerBoxCand" type="text" id="party"></input>

        <label className="label1" htmlFor="age">
          Age:
        </label>
        <input className="innerBoxCand" type="text" id="age"></input>

        <label className="label1" htmlFor="gender">
          Gender:
        </label>
        <input className="innerBoxCand" type="text" id="gender"></input>

        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
      <CandidateDiplay state = {state}></CandidateDiplay>
    </div>
  );
}
export default CandidateRegister;
