"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
          <LanguagesIcon className="w-4 h-4 hover:text-green-400" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="shadow">
        <DropdownItem
          key="en"
          color="success"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          English
        </DropdownItem>
        <DropdownItem
          key="mm"
          color="success"
          onClick={() => {
            changeLanguage("mm");
          }}
        >
          Myanmar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
