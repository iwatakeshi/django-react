import React from 'react'
import NavigationBar from '../common/NavigationBar'
export default function NotFound() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="content">
                <h1>404 :/</h1>
                <p>The page you're looking for does not exist.</p>
            </div>
        </div>
    );
}