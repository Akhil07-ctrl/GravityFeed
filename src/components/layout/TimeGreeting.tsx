'use client';

import { useEffect, useState } from 'react';

interface TimeGreetingProps {
    username: string;
}

export default function TimeGreeting({ username }: TimeGreetingProps) {
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            
            let greetingText = '';
            if (hour < 12) {
                greetingText = 'Good morning';
            } else if (hour < 17) {
                greetingText = 'Good afternoon';
            } else if (hour < 21) {
                greetingText = 'Good evening';
            } else {
                greetingText = 'Good night';
            }
            
            setGreeting(`${greetingText}, ${username}`);
        };

        updateGreeting();
        
        // Update greeting every minute
        const interval = setInterval(updateGreeting, 60000);
        
        return () => clearInterval(interval);
    }, [username]);

    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {greeting}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </p>
        </div>
    );
}
