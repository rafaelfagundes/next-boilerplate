import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = ({
  className,
}: Readonly<{ className?: string }>) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Switch
      className={className}
      defaultSelected
      size="lg"
      color="success"
      startContent={<IconMoon />}
      endContent={<IconSun />}
      isSelected={currentTheme === "dark"}
      onValueChange={(value) => setTheme(value ? "dark" : "light")}
    ></Switch>
  );
};
