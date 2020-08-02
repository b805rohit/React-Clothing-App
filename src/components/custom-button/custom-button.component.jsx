import React from 'react'
import "./custom-button.styles.scss"

export default function CustomButton({children,googleSignIn,...otherProps}) {
    return (
        <button className={`${googleSignIn ? 'google-sign-in' :''} custom-button`} {...otherProps}>{children}</button>
    )
}
