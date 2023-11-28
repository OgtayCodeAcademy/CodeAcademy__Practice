import React from 'react'
import classes from './index.module.scss';
import { Link } from 'react-router-dom';

export default function UserNavbar() {
  return (
    <header>
        <div className={`${classes.navbar}`}>
            <h1>Practice (User)</h1>
            <ul>
                <li>Test Scss</li>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"/admin"}>Admin</Link></li>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"/"}>Home</Link></li>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"/friends"}>Friends</Link></li>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"/send"}>Send Card</Link></li>
            </ul>
        </div>
    </header>
  )
}
