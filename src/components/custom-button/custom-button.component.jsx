import React from 'react'
import "./custom-button.styles.scss"

export default function CustomButton({children,googleSignIn,inverted,...otherProps}) {
    return (
        <button className={`${ inverted ? 'inverted' :''} ${googleSignIn ? 'google-sign-in' :''} custom-button`} {...otherProps}>{children}</button>
    )
}
