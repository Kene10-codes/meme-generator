import { useState } from "react"

export default function Box(props) {
   const styles = {
       backgroundColor: props.on ? "black" : "yellow"
   }
    return (
        <main>
           <div style={styles} className="box" onClick={props.handleClick}></div>
        </main>
    )
}