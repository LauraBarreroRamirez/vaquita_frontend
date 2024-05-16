import TargetGroup from "./TargetGroup";

function Header() {
  return (
    <>
      <div className="container mx-6 font-semibold">
        <p className="text-sm">Debes</p>
        <p className="text-red text-4xl mb-10">${}</p>
      </div>
      <div className="mb-2">
        <TargetGroup />
      </div>
    </>
  );
}

export default Header;
