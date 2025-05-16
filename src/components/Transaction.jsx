import Header from "./Header";
import AddButton from "./AddButton";
import ShadowMax from "./ShadowMax";
import TableTransaction from "./TableTransaction";

export default function Transaction() {
  
  return (
    <div className="p-5 relative">
      <Header />

      <ShadowMax child={<TableTransaction />} />
      <div
        className="fixed z-[5] bottom-3 right-3"
        onClick={() => setIsOpen(true)}
      >
        <AddButton />
      </div>
    </div>
  );
}
