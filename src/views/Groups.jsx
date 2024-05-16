import Body from "../components/Body";
import Header from "../components/Header";
import Button from "../components/NewGroup";
import PrincipalButton from "../components/buttons/PrincipalButton";

function Groups() {
  return (
    <>
      <Body />
      <Button />
      <PrincipalButton text="clickleame" onClick={Button} />
      <PrincipalButton text="otroclickleame" />
      <Header />
    </>
  );
}

export default Groups;
