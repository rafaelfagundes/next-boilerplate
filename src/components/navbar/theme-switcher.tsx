import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = ({
  className,
}: Readonly<{ className?: string }>) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Switch
      className={className}
      size="lg"
      color="success"
      startContent={<IconMoon />}
      endContent={<IconSun />}
      isSelected={currentTheme === "dark"}
      onValueChange={(value) => setTheme(value ? "dark" : "light")}
    />
  );
};
