import { useEffect } from "react";

export const useTheming = (): void => {
  useEffect(() => {
    const osPreference = "(prefers-color-scheme: dark)";
  }, []);
};
