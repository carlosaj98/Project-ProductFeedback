import NavbarSections from "./NavbarSections"
import NavbarUserBtn from "./NavbarUserBtn"
import CustomNavbar from "./Style"

function Navbar({ status, handleCategory, currentCategory }) {
  function statusValue(value) {
    return status.reduce((counter, element) => {
      if (element === value) {
        return counter + 1
      }
      return counter
    }, 0)
  }
  return (
    <CustomNavbar
      component="nav"
      minWidth={{ md: "256px" }}
      width={{ md: "256px", sm: "100%" }}
      height="100%"
    >
      <NavbarSections
        statusValue={statusValue}
        handleCategory={handleCategory}
        currentCategory={currentCategory}
      />
      <NavbarUserBtn />
    </CustomNavbar>
  )
}
export default Navbar
