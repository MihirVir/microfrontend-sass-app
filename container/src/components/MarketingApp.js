import React, {useRef, useEffect} from "react";
import { mount } from "marketing/Marketing";

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        // passing refereces of html elem
        mount(ref.current)
    }, [])

    return <div ref = {ref} />
}