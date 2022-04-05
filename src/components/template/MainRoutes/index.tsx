import * as React from 'react';
import {Route, Routes} from 'react-router-dom'
import LetterFind from '../../pages/games/LetterFind';
import Spelling from '../../pages/games/Spelling';
import Home from '../../pages/Home';


export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="letterFind" element={<LetterFind />} />
        <Route path="spelling" element={<Spelling />} />
    </Routes>
  );
}