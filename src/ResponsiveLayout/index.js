import { useWindowDimentions } from "../contexts/WindowDimensionsProvider";

export default function ResponsiveLayout({
  breakpoint,
  renderMobile,
  renderDesktop,
}) {
  const { width } = useWindowDimentions();

  return width > breakpoint ? renderDesktop() : renderMobile();
}
