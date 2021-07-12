import React from "react";
import StartComponent from "./startComponent/startComponent";
import PlayComponent from "./playComponent/playComponent";
import {BrowserRouter, Route} from "react-router-dom";
import SettingComponent from "./settingComponent/settingComponent";
import RecordsComponent from "./recordsComponent/recordsComponent";


const HomeComponent = () => {

    return (
        <BrowserRouter>
                    <>
                        <Route exact path='/' render={() => <StartComponent/>}/>
                        <Route path='/play' render={() => <PlayComponent/>}/>
                        <Route path='/setting' render={() => <SettingComponent/>}/>
                        <Route path='/records' render={() => <RecordsComponent/>}/>
                    </>
        </BrowserRouter>
    )
}
export default HomeComponent