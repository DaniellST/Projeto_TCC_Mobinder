import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-azul z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row flex-center justify-between gap-3 md:gap-0">
            <Logo></Logo>
            <Search></Search>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
