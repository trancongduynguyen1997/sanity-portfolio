import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function NavCollection({ toggleMenu }) {
  const { t } = useTranslation();

  return (
    <div className="md:flex md:items-center">
      <NavLink
        to="/post"
        className="inline-flex items-center py-3 px-3  rounded text-gray-200 hover:text-yellow-200"
        activeClassName="text-gray-100 font-bold"
        onClick={toggleMenu}
      >
        {t("navBlog")}
      </NavLink>
      <NavLink
        to="/project"
        className="inline-flex items-center py-3 px-3  rounded text-gray-200 hover:text-yellow-200"
        activeClassName="text-gray-100 font-bold"
        onClick={toggleMenu}
      >
        {t("navProject")}
      </NavLink>
      <NavLink
        to="/about"
        className="inline-flex items-center py-3 px-3  rounded text-gray-200 hover:text-yellow-200"
        activeClassName="text-gray-100 font-bold"
        onClick={toggleMenu}
      >
        {t("navAbout")}
      </NavLink>
      <NavLink
        to="/contact"
        className="inline-flex items-center py-3 px-3  rounded text-gray-200 hover:text-yellow-200"
        activeClassName="text-gray-100 font-bold"
        onClick={toggleMenu}
      >
        {t("navContact")}
      </NavLink>
    </div>
  );
}
