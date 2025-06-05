/* eslint-disable react/prop-types */
import Geogebra from "react-geogebra";

export default function GeoGebraPure({
  value,
  ggbWidth = 800,
  ggbHeight = 800,
  id = "ggb",
}) {
  return (
    <Geogebra
      id={id}
      width={ggbWidth}
      // Die -58 entfernen die Höhe für den Zurückknopf
      height={ggbHeight}
      algebraInputPosition={false}
      allowStyleBar={false}
      allowUpscale={false}
      customToolBar={false}
      showToolBar={false}
      reloadOnPropChange={true} // Leverages prop changes
      showAlgebraInput={false}
      showAnimationButton={false}
      showFullscreenButton={false}
      showZoomButtons={false}
      showToolBarHelp={false}
      showLogging={false}
      showMenuBar={false}
      enableLabelDrags={false}
      enable3d={false}
      enableCAS={false}
      enableFileFeatures={false}
      enableRightClick={false}
      enableShiftDragZoom={false}
      showResetIcon={false}
      showStartTooltip={false}
      showSuggestionButtons={false}
      ggbBase64={value}
    />
  );
}
