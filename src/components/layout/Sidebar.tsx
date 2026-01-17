'use client';

import { CloudSun, TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function Sidebar() {
    const router = useRouter();
    const [weather, setWeather] = useState<{
        temp: number;
        condition: string;
        city: string;
        isDay: boolean;
        loading: boolean;
    }>({
        temp: 72,
        condition: 'Sunny',
        city: 'San Francisco',
        isDay: true,
        loading: true
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setWeather(prev => ({ ...prev, loading: false }));
            return;
        }

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

                setWeather({
                    temp: Math.round(weatherData.current_weather.temperature),
                    condition,
                    city,
                    isDay: weatherData.current_weather.is_day === 1,
                    loading: false
                });
            } catch (error) {
                console.error("Weather fetch failed", error);
                setWeather(prev => ({ ...prev, loading: false }));
            }
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            () => {
                setWeather(prev => ({ ...prev, loading: false }));
            }
        );
    }, []);

    const sidebarRef = useRef<HTMLElement>(null);
    const [topOffset, setTopOffset] = useState(96); // 96px = top-24
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sidebarRef.current) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const sidebarHeight = sidebarRef.current.offsetHeight;
            const stickyTop = 96; // Offset from top of viewport

            // If sidebar is shorter than viewport, just stay at top-24
            if (sidebarHeight + stickyTop <= viewportHeight) {
                setTopOffset(stickyTop);
                prevScrollY.current = scrollY;
                return;
            }

            const scrollDelta = scrollY - prevScrollY.current;
            const minTop = viewportHeight - sidebarHeight - 40; // pb-10 = 40px
            const maxTop = stickyTop;

            setTopOffset((prev) => {
                const newOffset = prev - scrollDelta;
                return Math.min(Math.max(newOffset, minTop), maxTop);
            });

            prevScrollY.current = scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCategoryClick = (category: string) => {
        router.push(`/?category=${category.toLowerCase()}`);
    };

    return (
        <aside
            ref={sidebarRef}
            className="w-80 hidden lg:block sticky self-start pl-6 pb-10"
            style={{ top: `${topOffset}px` }}
        >
            {/* Weather Widget */}
            <a
                href="https://weather.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-2xl p-6 text-white shadow-lg mb-8 hover:scale-[1.02] transition-all relative overflow-hidden ${weather.isDay
                    ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                    : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900'
                    }`}
            >
                {weather.loading ? (
                    <div className="flex flex-col items-center justify-center py-4 gap-2">
                        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <p className="text-xs text-blue-100">Finding your horizon...</p>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-lg truncate max-w-[150px]">{weather.city}</h3>
                                <p className="text-blue-100 text-sm">{weather.condition}</p>
                            </div>
                            <CloudSun className={`w-10 h-10 ${weather.isDay ? 'text-yellow-200' : 'text-blue-200'}`} />
                        </div>
                        <div className="text-4xl font-bold mb-2">{weather.temp}°</div>
                        <div className="text-sm text-blue-100 flex justify-between">
                            <span>Today</span>
                            <span className="flex items-center gap-1">Live <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /></span>
                        </div>
                    </>
                )}
            </a>

            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm mb-8">
                <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm font-bold uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" /> Trending Now
                </div>
                <ul className="space-y-4">
                    {[
                        { tag: 'Technology', posts: '15k' },
                        { tag: 'Business', posts: '12k' },
                        { tag: 'Sports', posts: '10k' },
                        { tag: 'Entertainment', posts: '8k' },
                        { tag: 'Science', posts: '6k' }
                    ].map((item, i) => (
                        <li key={i}>
                            <button
                                onClick={() => handleCategoryClick(item.tag)}
                                className="group block w-full text-left"
                            >
                                <span className="font-medium group-hover:text-blue-600 transition-colors">#{item.tag}</span>
                                <p className="text-xs text-gray-500">{item.posts} posts</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    <li>
                        <Link href="/bookmarks" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Bookmarks <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=technology" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Technology <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/?category=business" className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                            Business <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
