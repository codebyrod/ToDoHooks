import React, { useState, useEffect } from "react";
import Main from "./Main"
import NightMode from "./NightMode"

import * as S from "./styles"

function App(){

  const [dayMode, setdayMode] = useState(true)

  return(
    <S.Container>
        {dayMode && <Main />}
    </S.Container>
      
  )
}

export default App;