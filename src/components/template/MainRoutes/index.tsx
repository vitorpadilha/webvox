import * as React from 'react';
import {Route, Routes} from 'react-router-dom'
import Calculator from '../../pages/games/Calculator';
import LetterFind from '../../pages/games/LetterFind';
import Spelling from '../../pages/games/Spelling';
import Home from '../../pages/Home';
import BrailleEditor from '../../pages/tools/BrailleEditor';


export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="letterFind" element={<LetterFind />} />
        <Route path="spelling" element={<Spelling />} />
        <Route path="brailleEditor" element={<BrailleEditor />} />
        <Route path="calculator" element={<Calculator />} />
    </Routes>
  );
}