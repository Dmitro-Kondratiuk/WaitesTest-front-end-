import React from "react";
import preloader from "../../../uploads/Баскетбол.gif"
import class_name from "./Preloader.module.css"

const Preloader=(props)=>{
    return <div className={class_name.preloader}>
        <img src={preloader} />
    </div>
}
export default Preloader;