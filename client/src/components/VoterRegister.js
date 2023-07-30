import Vote from "./Vote";
import VoterList from "./VoterList";
function VoterRegister({state , account}) {
  async function register(event){
    event.preventDefault();
    const {contract} = state;
    const _name = document.querySelector("#name").value;
    const _age = document.querySelector("#age").value;
    const _gender = document.querySelector("#gender").value;
    try{
      await contract.methods.voterRegister(_name , _age , _gender).send({
        from : account,
        gas : "1000000",
      })
      alert("Registration Successful");
      window.location.reload();
    }
    catch(error){
      alert(error);
    }
    const voter = await contract.methods.voterList().call();
    console.log(voter);
  }
  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit = {register}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>
        <Vote state = {state} account = {account}></Vote>
        <VoterList state = {state}></VoterList>
      </div>
    </div>
  );
}
export default VoterRegister;
