import { useRecoilState } from "recoil";
import { mobileNavbarState } from "@/lib/recoil/mobileNavbarAtom";
import { useEffect, useState } from "react";

export const useMobileNavbar = () => {
  const [state, setState] = useRecoilState(mobileNavbarState);
  const [accordionValue, setAccordionValue] = useState<string[] | undefined>(
    undefined,
  );

  const close = () => {
    setAccordionValue(undefined);
    setState((currVal) => {
      return {
        ...currVal,
        opened: false,
      };
    });
  };

  const open = () =>
    setState((currVal) => {
      return {
        ...currVal,
        opened: true,
      };
    });

  useEffect(() => {
    // console.log(accordionValue);
  }, [accordionValue]);

  return {
    close,
    open,
    state,
    accordionValue,
    setAccordionValue,
  };
};
