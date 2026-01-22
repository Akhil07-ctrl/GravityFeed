'use client';

import { useEffect, useState } from 'react';
import WeatherWidget from './WeatherWidget';

interface TimeGreetingProps {
    username: string;
}

export default function TimeGreeting({ username }: TimeGreetingProps) {
    const [greeting, setGreeting] = useState<string>('');
    const [formattedDate, setFormattedDate] = useState<string>('');

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

        const updateDate = () => {
            setFormattedDate(
                new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            );
        };

        updateGreeting();
        updateDate();

        // Update greeting every minute
        const interval = setInterval(() => {
            updateGreeting();
            updateDate();
        }, 60000);

        return () => clearInterval(interval);
    }, [username]);

    return (
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {greeting || `Hello, ${username}`}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    {formattedDate}
                </p>
            </div>

            {/* Weather Widget - Visible only on mobile/tablet */}
            <div className="lg:hidden w-full md:w-80">
                <WeatherWidget />
            </div>
        </div>
    );
}
