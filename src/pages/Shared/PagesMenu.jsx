import React from "react";
// import { NavLink } from "react-router-dom"; // ✅ use react-router-dom
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";

export const PagesMenu = ({ mobileMode = false }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pagesDropdown = [
    { name: "About Us", link: "/aboutus" },
    { name: "FAQ", link: "/faq" },
  ];

  const renderItems = pagesDropdown.map(({ name, link }, index) => (
    <NavLink
      to={link}
      key={index}
      className="block"
      onClick={() => setIsMenuOpen(false)} // close after click
    >
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <Typography variant="h6" color="black" className="text-sm font-bold">
          {name}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  if (mobileMode) {
    return (
      <div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-1 cursor-pointer"
        >
          Pages
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <Collapse open={isMenuOpen}>{renderItems}</Collapse>
      </div>
    );
  }

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <div className="flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-primary">
          Pages
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </MenuHandler>
      <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
        <ul className="grid grid-cols-1 gap-y-2 outline-none">{renderItems}</ul>
      </MenuList>
    </Menu>
  );
};
