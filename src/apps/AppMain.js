import { Routes, Route } from 'react-router-dom';
import ThingsToDo from './ThingsToDo';
import WhatDoIHavetoBuy from './WhatDoIHavetoBuy';
import WhatCanIEat from './WhatCanIEat';
import WhatIsInside from './WhatIsInside';
import Tasks from './Tasks';
import { fakeData as listData } from "../utils/fakeData";

const AppMain = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ThingsToDo />} />
                <Route path="/whatcanieat" element={<WhatCanIEat />} />
                <Route path="/whattobuy" element={<WhatDoIHavetoBuy listData={listData}/>} />
                <Route path="/whatsinside" element={<WhatIsInside />} />
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </main>
    );
}

export default AppMain;