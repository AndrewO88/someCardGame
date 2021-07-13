import React from "react";
import {Link} from "react-router-dom";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useCustomState} from "../../../context/context";

const SettingComponent = () => {
    const {state: globalState, dispatch} = useCustomState()
    const handleChange = (event) => {
        dispatch({type: 'setQuantityCards', quantityCards: event.target.value});
    };
    return (
        <>
            <h1>Настройки</h1>
            <Link to="/">
                <button>Назад</button>
            </Link>
            <div>
                <FormControl variant="outlined" style={{width: '300px', margin: '10px'}} >
                    <InputLabel>Выберите сложность игры</InputLabel>
                    <Select
                        value={globalState.quantityCards}
                        onChange={handleChange}
                        label="Выберите сложность игры"
                    >
                        <MenuItem value={8}>Легко</MenuItem>
                        <MenuItem value={16}>Средне</MenuItem>
                        <MenuItem value={24}>Сложно</MenuItem>
                    </Select>
                </FormControl>
                <div><h4>кек:</h4></div>
                <div><h4>чпок:</h4></div>
            </div>
        </>
    )
}
export default SettingComponent