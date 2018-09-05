import React from 'react';
import NavigationBar from '../common/NavigationBar'

export default function Home() {
    return (
        <div>
            <NavigationBar></NavigationBar>
                <div className="content">
                    <h1>Welcome</h1>
                    <p>This is a blank page.</p>
                </div>
        </div>
    )
}