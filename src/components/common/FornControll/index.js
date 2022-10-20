import style from "./FormControll.css"

export const Input = ({input,meta,...props})=>{
    const hsaError = meta.touched && meta.error;
    return (
        <div className={ navData => navData.isActive ? style.formControl : style.error}>
            <div>
                <input {...input}  {...props} value={props.defaultValue}/>
            </div>
            {hsaError && <span className={style.error}> {meta.error}</span>}
        </div>
    )
}