'use client';

import { CloudSun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WeatherWidgetProps {
    className?: string;
}

export default function WeatherWidget({ className = '' }: WeatherWidgetProps) {
    const [weather, setWeather] = useState<{
        temp: number;
        condition: string;
        city: string;
        isDay: boolean;
        loading: boolean;
    }>({
        temp: 72,
        condition: 'Sunny',
        city: 'Local Area',
        isDay: true,
        loading: true
    });

    useEffect(() => {
        if (typeof window === 'undefined' || !navigator.geolocation) {
            setWeather(prev => ({ ...prev, loading: false }));
            return;
        }

        let isMounted = true;

        const fetchWeather = async (lat: number, lon: number) => {
            try {
                // Fetch weather
                const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
                const weatherData = await weatherRes.json();

                // Fetch city name (Reverse Geocoding)
                const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                const geoData = await geoRes.json();

                const city = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.suburb || 'Local Area';

                // Map weather codes to descriptions (simplified)
                const code = weatherData.current_weather.weathercode;
                let condition = 'Sunny';
                if (code > 0 && code < 45) condition = 'Cloudy';
                if (code >= 45 && code < 60) condition = 'Foggy';
                if (code >= 60 && code < 70) condition = 'Rainy';
                if (code >= 70 && code < 80) condition = 'Snowy';
                if (code >= 80) condition = 'Stormy';

                if (isMounted) {
                    setWeather({
                        temp: Math.round(weatherData.current_weather.temperature),
                        condition,
                        city,
                        isDay: weatherData.current_weather.is_day === 1,
                        loading: false
                    });
                }
            } catch (error) {
                console.error("Weather fetch failed", error);
                if (isMounted) {
                    setWeather(prev => ({ ...prev, loading: false }));
                }
            }
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            () => {
                if (isMounted) {
                    setWeather(prev => ({ ...prev, loading: false }));
                }
            }
        );

        return () => {
            isMounted = false;
        };
    }, []);

    if (weather.loading) {
        return (
            <div className={`rounded-2xl p-6 text-white bg-blue-500 flex flex-col items-center justify-center min-h-[140px] gap-2 ${className}`}>
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <p className="text-xs text-blue-100">Finding your horizon...</p>
            </div>
        );
    }

    return (
        <a
            href="https://weather.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-2xl p-6 text-white shadow-lg hover:scale-[1.02] transition-all relative overflow-hidden ${weather.isDay
                    ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                    : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900'
                } ${className}`}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="min-w-0">
                    <h3 className="font-bold text-lg truncate">{weather.city}</h3>
                    <p className="text-blue-100 text-sm">{weather.condition}</p>
                </div>
                <CloudSun className={`w-10 h-10 shrink-0 ${weather.isDay ? 'text-yellow-200' : 'text-blue-200'}`} />
            </div>
            <div className="text-4xl font-bold mb-2">{weather.temp}°</div>
            <div className="text-sm text-blue-100 flex justify-between">
                <span>Today</span>
                <span className="flex items-center gap-1">Live <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /></span>
            </div>
        </a>
    );
}
