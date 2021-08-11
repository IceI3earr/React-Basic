import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <>
          <ul>
            <li>
              <Link to='/couter1'> Class Component </Link>
            </li>
            <li>
              <Link to='/couter2'> Function component </Link>
            </li>
            <li>
              <Link to='/couter3'> Function component and redux </Link>
            </li>
            <li>
              <Link to='/couter4'> Function component, redux, immerjs </Link>
            </li>
          </ul>
        </>
    )
}
