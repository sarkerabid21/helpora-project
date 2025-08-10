// import { NavLink } from "react-router-dom";

import React from "react";
import { NavLink } from "react-router";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
  Typography,
  ListItem
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
 
export const PagesMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const pagesDropdown = [
    { name: "About Us", link: "/aboutus" },
    { name: "Our Team", link: "/our-team" },
    { name: "Our Mission", link: "/our-mission" },
    { name: "Services", link: "/services" },
    { name: "FAQ", link: "/faq" },
  ];

  const renderItems = pagesDropdown.map(({ name, link }, index) => (
    <NavLink to={link} key={index}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <Typography
          variant="h6"
          color="black"
          className="text-sm font-bold"
        >
          {name}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2  font-medium "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Pages
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}
