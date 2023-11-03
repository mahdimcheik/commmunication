export default function Enfant({ nom, callBack, callBackName }) {
  const i = 10;
  function handleClick() {
    console.log("button clicked ");
    callBack(i);
    callBackName(nom + " Mcheik");
  }
  return (
    <div>
      <h2>enfant</h2>
      <h3>nom : {nom} Mcheik</h3>
      <button onClick={handleClick}>Increment</button>
      <input type="text" onInput={(e) => callBackName(e.target.value)} />
    </div>
  );
}
