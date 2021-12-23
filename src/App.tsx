import React, { FC } from "react";
import { GlobalStyle } from "styles/global/globalStyle";
import { AppProvider } from "provider/AppProvider";
import { leftScrollImage, rightScrollImage } from "consts/carouselImage";
import { Carousel } from "components/ui/carousel/Carousel";
import { StartTAoSK } from "components/ui/startTAoSK/StartTAoSK";

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Carousel direction="left" images={leftScrollImage} />
      <Carousel direction="right" images={rightScrollImage} />
      <StartTAoSK />
    </AppProvider>
  );
};

export default App;
