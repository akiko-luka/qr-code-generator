import qricon from "../assets/qr-code-icon.jpg";

const Header = () => {
  return (
    <header className="mb-10 bg-red-500 p-4 h-22 p">
      <div className="max-w-5xl m-auto flex gap-4 items-center font-bold text-xl">
        <img src={qricon} alt="QR Code Icon" className=" w-16" />
        <h1>QR-Code Generator</h1>
      </div>
    </header>
  );
};

export default Header;
