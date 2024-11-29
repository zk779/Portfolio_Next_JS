import USER from '../../data/user.json';

const AppFooter = () => {
  const handleCopyrightYears = () => {
    const startYears = '2021';
    const nowYears = new Date().getFullYear();
    const rangeYears =
      startYears === nowYears.toString()
        ? startYears
        : `${startYears} - ${nowYears}`;
    return rangeYears;
  };

  return (
    <footer className="text-center text-xs md:text-md text-gray py-7">
      <p className="mb-1">Design & Build by {USER.name}</p>
      {/* <p>Design with ReactJS + NextJS + Tailwindcss</p> */}
      <p>Copyright Reserved by &copy; zk779</p>
    </footer>
  );
};

export default AppFooter;
