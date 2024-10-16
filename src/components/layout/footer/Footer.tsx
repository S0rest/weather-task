const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-[#3c3c3c] h-[100px] flex justify-center items-center">
      <p className='text-white text-xl'>{getCurrentYear()} Orest Dykovych all right reserved</p>
    </footer>
  );
};

export default Footer