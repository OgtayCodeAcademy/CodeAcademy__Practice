import React from 'react'
import classes from './index.module.scss';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  return (
    <header>
        <div className={`${classes.navbar}`}>
            <h1>Practice (Admin)</h1>
            <ul>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"/"}>User</Link></li>
                <li><Link style={{textDecoration: 'none', color: 'white'}} to={"cardrequest"}>Card (confirm / decline)</Link></li>
            </ul>
        </div>
    </header>
  )
}
